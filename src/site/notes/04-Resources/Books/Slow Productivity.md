---
{"dg-publish":true,"permalink":"/04-resources/books/slow-productivity/","title":"Slow Productivity","tags":["book","booknotes","#source"]}
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]

```dataviewjs
const { cover, localCover } = dv.current();
const src = String(cover ?? localCover ?? "").replace(/^http:/, "https:");
if (src) {
  const img = dv.container.createEl("img", { attr: { src, alt: "Cover" } });
  img.style.maxWidth = "440px";
  img.style.maxHeight = "640px";
  img.style.width = "auto";
  img.style.height = "auto";
  img.style.objectFit = "contain";
  img.style.borderRadius = "6px";
  img.style.display = "block";
  }
```

```dataviewjs
const { rating } = dv.current();
if (rating) {
  const nRaw = Array.isArray(rating) ? rating[0] : rating;
  const n = Number(nRaw);
  if (!Number.isNaN(n) && n > 0) {
    const full = "★".repeat(Math.min(n, 5));
    const empty = "☆".repeat(Math.max(0, 5 - n));
    dv.paragraph(full + empty);
  }
}
```

> [!quote]- Citation  
> `= replace(string(choice(this.authors, join(this.authors, ", "), this.author)), "\\[\\[|\\]\\]", "") + choice(this.year, " (" + this.year + "). ", ". ") + "*" + string(this.title) + "*." + choice(this.publisher, " " + this.publisher + ".", "") + choice(this.doi, " https://doi.org/" + this.doi, choice(this.url, " " + this.url, ""))`
---

> [!abstract]- Summary
> *1–2 sentences in your words.*
---

_Slow Productivity_ is Newport’s argument for doing fewer things, at a more humane pace, while insisting on higher standards for the work that remains. Instead of optimizing for visible busyness, he pushes for long time horizons, generous focus, and project selection that preserves creative energy.

---
> [!note]- Notes
> - 2025-11-09 — p.__ — …
> - One line per thought. Use `p.n` for page marks. Tags: #insight #question #xref
> ---
> **Prompts**
> - Core idea in one line
> - Why it matters / stakes
> - Who wants what / conflict
> - Evidence or motif you noticed
> - One quote to keep (p.n)
> - Next connection to your work/life
---



---
> [!cite]- Quotes
> - “…” p._n_
---



---
> [!info]- Links
> - Source card: [[04-Resources/Sources/Literature Sources/newportSlowProductivityLost2024\|Zotero source card]]
> - Open in Zotero: https://books.google.com/books/about/Slow_Productivity.html?hl=&id=IV_DEAAAQBAJ
> - External: Hub: [[04-Resources/Reading Notes\|Reading Notes]]
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]