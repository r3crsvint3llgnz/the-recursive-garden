---
{"dg-publish":true,"permalink":"/04-resources/books/a-brief-history-of-thought/","title":"A Brief History of Thought","tags":["book","booknotes","#source"]}
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
````

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
---

> [!quote]- Citation  
> `= replace(string(choice(this.authors, join(this.authors, ", "), this.author)), "\\[\\[|\\]\\]", "") + choice(this.year, " (" + this.year + "). ", ". ") + "*" + string(this.title) + "*." + choice(this.publisher, " " + this.publisher + ".", "") + choice(this.doi, " https://doi.org/" + this.doi, choice(this.url, " " + this.url, ""))`
---

>[!abstract]+ Summary
---

*A Brief History of Thought* offers a concise tour of Western philosophy through a series of “spiritual families,” from ancient Greek wisdom to modern humanism. Ferry emphasizes how each major wave answers the question of how to live, and argues that contemporary secular humanism inherits, transforms, and sometimes misremembers those earlier traditions.

---

> [!note]- Notes
> 
> - 2025-08-15 — p.__ — Initial full read-through and first-pass review.
> - One line per thought. Use `p.n` for page marks. Tags: #insight #question #xref
>
> ---
>
> **Prompts**
> - Core idea in one line
> - Why it matters / stakes
> - Who wants what / conflict
> - Evidence or motif you noticed
> - One quote to keep (p.n)
> - Next connection to your work/life
> - ---
---


---

> [!cite]- Quotes
> 
>"…" p.__
---


---

> [!info]- Links
> 
> Source card:
> Open in Zotero: https://play.google.com/store/books/details?id=QJI3jvh8S30C
> External:
> Hub: [[04-Resources/Reading Notes\|Reading Notes (Hub)]]
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]