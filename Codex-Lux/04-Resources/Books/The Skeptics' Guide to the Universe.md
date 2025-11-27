---
dg-publish: true
Type: book
section: books
tags:
  - book
  - booknotes
  - "#source"
title: The Skeptics' Guide to the Universe
author: "[[Steven Novella]]"
category: "[[Science]]"
publisher: Hachette+ORM
publish: 2018-10-02
year: 2025-11-09
pages: "508"
isbn: 1538760517 9781538760512
cover: https://books.google.com/books/content?id=6aNKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
localCover: ""
status:
  - read
rating: 5
citekey: ""
zotero_uri: https://play.google.com/store/books/details?id=6aNKDwAAQBAJ
doi: ""
url: ""
created: 2025-11-09T20:18:00
updated: 2025-11-09T20:18:00
started:
finished: 2025-11-23
in_kindle:
in_library: true
in_audible: true
---
# The Skeptics' Guide to the Universe
[[The Recursive Garden|Home]] · [[About]] · [[Reading Notes]]

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

_The Skeptics’ Guide to the Universe_ is a field manual for critical thinking in a noisy information environment. Novella and co-authors walk through logical fallacies, cognitive biases, and classic pseudoscience case studies, equipping readers with habits and tools to evaluate extraordinary claims without becoming cynics.

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
> - Source card: [[../../Sources/Literature Sources/|Zotero source card]]
> - Open in Zotero: https://play.google.com/store/books/details?id=6aNKDwAAQBAJ
> - External: 
---

[[The Recursive Garden|Home]] · [[About]] · [[Reading Notes]]