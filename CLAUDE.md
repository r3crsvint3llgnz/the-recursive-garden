# the-recursive-garden

Eleventy-based digital garden serving Obsidian vault notes.
Live at `https://recursiveintelligence.xyz`.

## Commands

```bash
npm start        # Dev server (fetches theme, compiles SCSS, runs 11ty with watch)
npm run build    # Production build → dist/
npm run lint     # ESLint
```

Requires Node 22.x. Config in `.env` (site name, theme URL, feature flags).

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Eleventy (@11ty/eleventy) v3 |
| Templating | Nunjucks |
| Styling | SCSS (compiled via sass CLI) |
| Markdown | markdown-it + plugins (anchors, footnotes, MathJax3, PlantUML, task-checkboxes) |
| Deployment | Netlify (primary), Vercel (secondary) |

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
- Do not alter the note directory structure or frontmatter conventions
- Plugin-managed templates and layouts in `src/site/_includes/` may be overwritten
  on plugin updates — custom changes should be clearly isolated
- Functionality (backlinks, graph, local graph, search) must remain intact after
  any visual changes

## Notes

- Design tokens flow in from `recursive-style-system` via `tokens.json`
- Output goes to `dist/` — gitignored
- Live domain: `https://recursiveintelligence.xyz`
