# AWS Amplify Deployment Guide

## Root Cause Analysis

The AWS Amplify build failure was caused by:

1. **Missing `amplify.yml`**: AWS Amplify was using default build settings which may not properly handle the Eleventy static site generator
2. **Missing environment variables**: The `.env` file is gitignored, so environment variables weren't available in the Amplify build environment
3. **Potential special character issues**: Files with Unicode dashes (en-dash `–` and em-dash `—`) may cause slugification issues on Linux

## Fix Applied

### 1. Created `amplify.yml`

The `amplify.yml` file has been created with proper build configuration:

- Uses `npm ci` for consistent dependency installation
- Runs `npm run build` which executes the full build pipeline
- Outputs to `dist` directory
- Caches `node_modules` for faster builds

### 2. Environment Variables Required

You **must** add these environment variables to AWS Amplify Console:

#### How to Add Environment Variables in Amplify:

1. Go to AWS Amplify Console
2. Select your app: **the-recursive-garden**
3. Click **App settings** → **Environment variables**
4. Click **Manage variables**
5. Add each variable below:

#### Required Variables (from .env file):

```bash
# Site Configuration
SITE_NAME_HEADER=The Recursive Garden
SITE_MAIN_LANGUAGE=en
SITE_BASE_URL=https://recursiveintelligence.xyz

# Timestamps
SHOW_CREATED_TIMESTAMP=false
TIMESTAMP_FORMAT=MMM dd, yyyy h:mm a
SHOW_UPDATED_TIMESTAMP=false

# Note Icons
NOTE_ICON_DEFAULT=
NOTE_ICON_TITLE=false
NOTE_ICON_FILETREE=false
NOTE_ICON_INTERNAL_LINKS=false
NOTE_ICON_BACK_LINKS=false

# Styling
STYLE_SETTINGS_CSS=
STYLE_SETTINGS_BODY_CLASSES=
USE_FULL_RESOLUTION_IMAGES=false

# Theme
THEME=https://raw.githubusercontent.com/Quinta0/Aurora-Twilight/HEAD/theme.css
BASE_THEME=dark

# Digital Garden Settings
dgHomeLink=true
dgPassFrontmatter=true
dgShowBacklinks=true
dgShowLocalGraph=true
dgShowInlineTitle=true
dgShowFileTree=true
dgEnableSearch=true
dgShowToc=true
dgLinkPreview=true
dgShowTags=true
```

**Note**: For empty values (like `NOTE_ICON_DEFAULT`), you can either:

- Leave the value field blank in Amplify Console
- Or enter a space character

## Deployment Steps

### Option A: Quick Deploy (Recommended)

1. Commit the new `amplify.yml` file:

   ```bash
   git add amplify.yml AMPLIFY_DEPLOYMENT_GUIDE.md
   git commit -m "Add Amplify configuration and deployment guide"
   git push origin main
   ```

2. Add environment variables in Amplify Console (see above)

3. Trigger a new build in Amplify Console or wait for automatic deployment

### Option B: If Build Still Fails

If the build still fails after adding environment variables, the issue may be special characters in filenames. Create a backup and rename these files:

**Files with en-dash (–) - replace with regular hyphen (-):**

- `src/site/notes/04-Resources/Atoms/RDD – Distinction (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Entropy (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Existence (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Gravity (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Persistence (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Perspective (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Potential (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Recursion (Definition).md`
- `src/site/notes/04-Resources/Atoms/RDD – Time (Definition).md`

**Files with em-dash (—) - replace with regular hyphen (-):**

- `src/site/notes/04-Resources/Molecules/KERNEL — prompt pattern (molecule).md`

**Renaming command** (if needed):

```bash
# Example for one file:
git mv "src/site/notes/04-Resources/Atoms/RDD – Distinction (Definition).md" \
       "src/site/notes/04-Resources/Atoms/RDD - Distinction (Definition).md"
```

## Verification

After deployment succeeds:

1. Check the build logs in Amplify Console for any warnings
2. Visit your site at the Amplify-provided URL
3. Verify all pages load correctly
4. Check that internal links work properly

## Troubleshooting

### Build fails with "Failed to set up process.env.secrets"

- This is just a **warning** and not the cause of failure
- Amplify shows this when no secrets are configured (which is normal)

### Build fails after adding environment variables

- Check that all variables are added correctly (no typos)
- Try the filename renaming approach (Option B above)
- Check Amplify build logs for specific error messages

### Theme doesn't load

- Verify `THEME` environment variable URL is accessible
- The build will create a fallback theme if download fails
- Check `src/site/styles/` for `_theme.*.css` files in build output

## Additional Notes

- The `.env` file should **never** be committed to git (it's in `.gitignore`)
- Environment variables in Amplify Console override local `.env` values during deployment
- The build uses Node.js 20 by default (configured in Amplify app settings)
- Build artifacts are cached to speed up subsequent deployments
