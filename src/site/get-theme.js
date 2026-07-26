require('dotenv/config');
const axios = require('axios');
const fs = require('fs');
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
      const res = await axios.get(themeUrl);
      try {
        const existing = globSync('src/site/styles/_theme.*.css');
        existing.forEach((file) => {
          fs.rmSync(file);
        });
      } catch {
        // Intentionally ignore errors when removing old theme files
      }
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
      fs.writeFileSync(`src/site/styles/_theme.${hex.substring(0, 8)}.css`, data);
    } catch (error) {
      // Download failed (both theme.css and obsidian.css variants). Don't
      // crash the build (AMPLIFY_DEPLOYMENT_GUIDE.md: "The build will
      // create a fallback theme if download fails") — reuse a cached
      // theme file if one exists, otherwise write a minimal fallback.
      console.warn(`Warning: failed to download theme from ${themeUrl}`);
      console.warn(`  ${error.message}`);
      const existing = globSync('src/site/styles/_theme.*.css');
      if (existing.length > 0) {
        console.warn(`Using cached theme file: ${existing[0]}`);
      } else {
        console.warn('No cached theme found. Creating minimal fallback theme.');
        fs.writeFileSync(
          'src/site/styles/_theme.fallback.css',
          '/* Fallback theme - remote theme unavailable */\nbody { font-family: system-ui, -apple-system, sans-serif; }\n'
        );
      }
    }
  }
}

getTheme();
