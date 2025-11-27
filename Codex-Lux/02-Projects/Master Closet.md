---
kind_pm: Epic
project:
  - "[[02-Projects/Home|Home]]"
parent: "[[02-Projects/Home|Home]]"
status:
  - in progress
priority:
due:
tags:
cover:
description:
topics:
---
> [!summary]- Open Stories
```dataview
TABLE status, priority, due
WHERE kind_pm = "Story" AND parent = this.file.link
SORT status asc, due asc, priority asc
````
---

> [!warning]+ 🚨 Open Tasks (all child Stories)
```tasks
not done
filter by function (task.file.frontmatter?.parent ?? '').includes('[[{{query.file.filename}}]]')
group by filename
sort by due
```
---

> [!note]- Notes
---

---
