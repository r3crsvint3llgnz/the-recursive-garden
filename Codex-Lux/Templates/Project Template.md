---
kind_pm: Project
status:
priority:
due:
tags:
cover:
description:
topics:
project:
  - "[[Project Template]]"
---

![[Project Management.base#Project Files]]

>[!warning]+ 🚨 Project Tasks
>```tasks
>not done
>filter by function String((task.file.frontmatter?.project ?? []).join('|')).includes('[[{{query.file.filename}}]]')
>group by filename
>sort by due
>```