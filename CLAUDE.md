# the-recursive-garden

Eleventy-based digital garden serving Obsidian vault notes.
Live at `https://recursiveintelligence.xyz`.

## Commands

```bash
npm start        # Dev server (fetches theme, compiles SCSS, runs 11ty with watch)
npm run build    # Production build → dist/
npm test         # Vitest
```

`eslint.config.js` is orphaned — eslint is not a declared dependency (checked `package.json`/`node_modules`), there is no `lint` script, and no CI workflow lints. Running `npx eslint .` fails with `Cannot find package '@eslint/js'`. Linting requires installing `eslint`, `@eslint/js`, and `eslint-config-prettier` first.

Requires Node 22.x. Config in `.env` (site name, theme URL, feature flags).

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Eleventy (@11ty/eleventy) v3 |
| Templating | Nunjucks |
| Styling | SCSS (compiled via sass CLI) |
| Markdown | markdown-it + plugins (anchors, footnotes, MathJax3, PlantUML, task-checkboxes) |
| Deployment | AWS Amplify (see `amplify.yml`, `AMPLIFY_DEPLOYMENT_GUIDE.md`) |

## Key Files

- `.eleventy.js` — markdown-it plugins, image optimization, filters
- `.env` — feature flags (`dgShowBacklinks`, `dgShowLocalGraph`, etc.)
- `src/site/_data/` — site data files
- `src/site/_includes/` — Nunjucks templates and components

## Strategic Direction

Goal is to align the garden's visual design with `recursiveintelligence-website`
(orange on black, shared typography, design token parity) while preserving full
Obsidian plugin compatibility.

## Obsidian Plugin Constraints

This repo is managed by the Obsidian Digital Garden plugin. The plugin has structural
expectations that must not be broken:
- **Note files here are generated, not authored.** They are plugin-published mirrors of vault
  notes carrying `dg-publish: true` (121 files). Editing one is doubly wrong: the change is
  overwritten on the next publish, and it is live published content. Edit the vault note
  instead — and that note is itself read-only under the global `dg-publish` hard constraint,
  so it needs Seth's sign-off.
- Do not alter the note directory structure or frontmatter conventions
- Plugin-managed templates and layouts in `src/site/_includes/` may be overwritten
  on plugin updates — custom changes should be clearly isolated
- Functionality (backlinks, graph, local graph, search) must remain intact after
  any visual changes

## Notes

- `recursive-style-system` repo referenced in design notes does not exist under `~/code` (confirmed 2026-06-30). `tokens.json` also not present. This integration is either not implemented or was removed — do not rely on it until the repo is located or recreated.
- Output goes to `dist/` — gitignored
- Live domain: `https://recursiveintelligence.xyz`

## Related
- [README.md](README.md) — concept/vision
- [../CLAUDE.md](../CLAUDE.md) — RI workspace context
- [../recursiveintelligence-website/CLAUDE.md](../recursiveintelligence-website/CLAUDE.md) — sibling site this garden aligns design with
