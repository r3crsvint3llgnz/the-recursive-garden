---
dg-publish: true
Type: book
tags:
  - book
  - booknotes
  - "#source"
title: "{{title}}"
author: "[[{{author}}]]"
category: "[[{{category}}]]"
publisher: "{{publisher}}"
publish: "{{publishDate}}"
year: "{{date}}"
pages: "{{totalPage}}"
isbn: "{{isbn10}} {{isbn13}}"
cover: "{{coverUrl}}"
localCover: "{{localCoverImage}}"
status:
  - unread
rating:
citekey: "{{citekey}}"
zotero_uri: "{{link}}"
doi: "{{DOI}}"
url: "{{URL}}"
created:
updated:
in_kindle:
in_library:
in_audible:
---
# <% tp.file.title %>
[[The Recursive Garden|🏠 Home]] · [[Reading Notes|📚 Reading Notes]] · [[Articles|📝 Articles]] · [[About|ℹ️ About]]

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

> [!quote]- Citation  
> `= replace(string(choice(this.authors, join(this.authors, ", "), this.author)), "\\[\\[|\\]\\]", "") + choice(this.year, " (" + this.year + "). ", ". ") + "*" + string(this.title) + "*." + choice(this.publisher, " " + this.publisher + ".", "") + choice(this.doi, " https://doi.org/" + this.doi, choice(this.url, " " + this.url, ""))`
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
> - Source card: [[../../Sources/Literature Sources/{{citekey}}|Zotero source card]]
> - Open in Zotero: {{zotero_uri}}
> - External: {{URL}}
---

[[The Recursive Garden|Home]] · [[About]] · [[Reading Notes]]