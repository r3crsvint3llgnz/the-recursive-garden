---
dg-publish: true
Type: book
section: books
tags:
  - book
  - booknotes
  - "#source"
title: The Beginning of Infinity
author: "[[David Deutsch]]"
category: "[[Mathematics]]"
publisher: Penguin UK
publish: "2012"
year: "2025-11-09"
pages: "723"
isbn: 0140278168 9780140278163
cover: https://books.google.com/books/content?id=WFZl7YvsiuIC&printsec=frontcover&img=1&zoom=1&source=gbs_api
localCover: ""
status:
  - read
rating: 5
citekey: ""
zotero_uri: https://books.google.com/books/about/The_Beginning_of_Infinity.html?hl=&id=WFZl7YvsiuIC
doi: ""
url: ""
created:
updated:
started:
finished:
in_kindle:
in_library:
in_audible: true
---

# The Beginning of Infinity
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

_The Beginning of Infinity_ argues that progress is unbounded wherever good explanations can be created and preserved. Deutsch weaves together physics, computation, and political philosophy to claim that problems are inevitable but also, in principle, solvable, if we build institutions and cultures that welcome error-correcting knowledge.

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
> - Open in Zotero: https://books.google.com/books/about/The_Beginning_of_Infinity.html?hl=&id=WFZl7YvsiuIC
> - External: 
---

[[The Recursive Garden|Home]] · [[About]] · [[Reading Notes]]