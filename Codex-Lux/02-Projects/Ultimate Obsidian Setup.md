---
kind_pm: Project
project:
parent:
status:
  - in progress
priority:
due:
tags:
  - "#project"
  - "#obsidian"
  - "#productivity"
cover:
description:
topics:
---

![[Project Management.base#Project Files]]

>[!warning]+ 🚨 Project Tasks
>```tasks
>not done
>filter by function String((task.file.frontmatter?.project ?? []).join('|')).includes('[[{{query.file.filename}}]]')
>group by filename
>sort by due
>```