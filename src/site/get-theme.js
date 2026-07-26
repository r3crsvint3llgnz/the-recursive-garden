require('dotenv/config');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { globSync } = require('glob');

const themeCommentRegex = /\/\*[\s\S]*?\*\//g;

async function getTheme() {
  let themeUrl = process.env.THEME;
  if (themeUrl) {
    //https://forum.obsidian.md/t/1-0-theme-migration-guide/42537
    //Not all themes with no legacy mark have a theme.css file, so we need to check for it
    try {
      await axios.get(themeUrl);
    } catch {
      if (themeUrl.indexOf('theme.css') > -1) {
        themeUrl = themeUrl.replace('theme.css', 'obsidian.css');
      } else if (themeUrl.indexOf('obsidian.css') > -1) {
        themeUrl = themeUrl.replace('obsidian.css', 'theme.css');
      }
    }

    try {
      // responseType/transformResponse force raw text: without this, a
      // theme host that responds with an unexpected content-type (e.g.
      // application/json) makes axios auto-parse res.data into an object,
      // and `.replace` below throws — which used to be indistinguishable
      // from a genuine download failure, but now matters because recovery
      // below depends on knowing whether we actually have fresh CSS.
      const res = await axios.get(themeUrl, { responseType: 'text', transformResponse: (r) => r });
      let skippedFirstComment = false;
      const data = res.data.replace(themeCommentRegex, (match) => {
        if (skippedFirstComment) {
          return '';
        } else {
          skippedFirstComment = true;
          return match;
        }
      });
      const hashSum = crypto.createHash('sha256');
      hashSum.update(data);
      const hex = hashSum.digest('hex');
      const target = `src/site/styles/_theme.${hex.substring(0, 8)}.css`;
      fs.writeFileSync(target, data);
      // Only remove old theme files once the new one is confirmed written —
      // deleting first meant any failure between download and write (bad
      // content-type, disk error) destroyed a working cached theme instead
      // of falling back to it, turning a loud build failure into a silently
      // deployed unstyled site.
      try {
        globSync('src/site/styles/_theme.*.css')
          .filter((file) => path.resolve(file) !== path.resolve(target))
          .forEach((file) => fs.rmSync(file, { force: true }));
      } catch (cleanupError) {
        console.warn(`Warning: could not remove old theme file(s): ${cleanupError.message}`);
      }
    } catch (error) {
      // Download/parse failed (may have already tried the theme.css/
      // obsidian.css swap above, depending on which variant failed). Don't
      // crash the build (AMPLIFY_DEPLOYMENT_GUIDE.md: "The build will
      // create a fallback theme if download fails") — reuse a cached
      // theme file if one exists (still on disk, since it's only removed
      // after a successful write above), otherwise write a minimal
      // fallback.
      console.warn(`Warning: failed to download theme from ${themeUrl}`);
      console.warn(`  ${error.message}`);
      const existing = globSync('src/site/styles/_theme.*.css');
      if (existing.length > 0) {
        console.warn(`Using cached theme file: ${existing[0]}`);
      } else {
        console.error('No cached theme found. Creating minimal fallback theme — site will ship unstyled.');
        try {
          fs.writeFileSync(
            'src/site/styles/_theme.fallback.css',
            '/* Fallback theme - remote theme unavailable */\nbody { font-family: system-ui, -apple-system, sans-serif; }\n'
          );
        } catch (writeError) {
          console.error(`Warning: could not write fallback theme file: ${writeError.message}`);
        }
      }
    }
  }
}

getTheme().catch((error) => {
  console.error('get-theme: unrecoverable error, continuing build without theme CSS:', error);
});
