---
{"dg-publish":true,"permalink":"/04-resources/books/two-thousand-three-hundred-and-twelve/","title":"Two Thousand Three Hundred and Twelve","tags":["book","fiction","booknotes","#source"]}
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

```dataviewjs
const page = dv.current();

const total = Number(page.pages ?? 0);
const current = Number(page.current_page ?? 0);

if (total > 0 && current >= 0) {
  const pct = Math.max(0, Math.min(100, Math.round((current / total) * 100)));

  const filled = Math.round(pct / 10);  // 10 segments
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  let line = `Progress: ${current}/${total} (${pct}%)`;

  if (page.reading_started) {
    line += ` · started ${page.reading_started}`;
  }
  if (page.reading_finished) {
    line += ` · finished ${page.reading_finished}`;
  }

  dv.paragraph(bar + "  " + line);
}
```

> [!quote]- Citation
> ```dataviewjs
> const page = dv.current();
>
> function stripBrackets(s) {
>   return String(s ?? "").replace(/\[\[|\]\]/g, "");
> }
>
> // Authors: prefer `authors` array, fall back to `author`
> let authors = "";
> if (Array.isArray(page.authors) && page.authors.length > 0) {
>   authors = page.authors.map(stripBrackets).join(", ");
> } else if (page.author) {
>   authors = stripBrackets(page.author);
> }
>
> // Year, title, publisher
> const year = page.year ? " (" + page.year + "). " : ". ";
> const title = page.title ? "*" + page.title + "*." : "";
> const publisher = page.publisher ? " " + page.publisher + "." : "";
>
> // DOI or URL
> let locator = "";
> if (page.doi) {
>   locator = " https://doi.org/" + page.doi;
> } else if (page.url) {
>   locator = " " + page.url;
> }
>
> const citation = (authors + year + title + publisher + locator).trim();
> if (citation) {
>   dv.paragraph("`" + citation + "`");
> }
> ```
---

> [!abstract]- Summary
> *1–2 sentences in your words.*
---



---
> [!note]- Notes
> - <% tp.date.now("YYYY-MM-DD") %> — p.__ — …
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
> - Source card: [[../../Sources/Literature Sources/{{citekey}}\|Zotero source card]]
> - Open in Zotero: {{zotero_uri}}
> - External: {{URL}}
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]