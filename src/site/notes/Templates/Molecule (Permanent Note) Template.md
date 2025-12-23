---
{"dg-publish":true,"permalink":"/templates/molecule-permanent-note-template/","tags":["molecule"]}
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]

> [!abstract]+ Summary
---

 

---

>[!info]+ Definition
---



---
> [!info]+ Auto-list atoms that link to this molecule (backlinks)
>
> ```dataview
> TABLE topics, source, pages, created
> FROM #atom
> WHERE contains(file.outlinks, this.file.link)
> SORT created DESC
> ```
---

> [!info]- Auto-list atoms this molecule links to (forward)
> ```dataview
> TABLE topics, source, page, created
> FROM #atom
> WHERE contains(this.file.outlinks, file.link)
> SORT file.name ASC
> ```
---

> [!example]- Worked example (edit inline)
> **Before (bad):**
>
> **After (pattern applied):**
> 
---

> [!fail]- Anti-patterns
> - 
> - 
> - 
---

> [!question]- FAQ (short answers)
> -
> -
> -
---



---
> [!abstract]- References
> Source:  
> Related molecules:
> ---
---

[[02-Projects/The Recursive Garden/The Recursive Garden\|🏠 Home]] · [[04-Resources/Reading Notes\|📚 Reading Notes]] · [[04-Resources/Articles/Articles\|📝 Articles]] · [[02-Projects/The Recursive Garden/About\|ℹ️ About]]