---
dg-publish: true
title: Articles
section: hubs
summary: Drafts in progress and published work across Substack, LinkedIn, and the fediverse.
cover: https://raw.githubusercontent.com/r3crsvint3llgnz/the-recursive-garden/main/src/site/img/user/02-Projects/The%20Recursive%20Garden/_assets/articles.png
---
![[articles.png]]
[[The Recursive Garden|🏠 Home]] · [[Reading Notes|📚 Reading Notes]] · [[About|ℹ️ About]]

> [!note]+ Drafts in progress
> ```dataview
> TABLE WITHOUT ID
> choice(
    cover,
    "<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:cover'/>",
    ""
  ) AS "",
  file.link AS "Article",
  join(topics, ", ") AS "Topics",
  join(status, ", ") AS "Status",
  default(summary, "-") AS "Summary"
FROM ""
WHERE kind = "article"
  AND any(list(status), (s) => contains(lower(s), "draft") OR contains(lower(s), "in progress"))
SORT updated DESC, created DESC, file.mtime DESC
LIMIT 20
> ```
---

> [!tip]+ Idea / outline stage
> ```dataview
> TABLE WITHOUT ID
>   choice(
>     cover,
>     "<img src='" + replace(cover,"^http:","https:") + "' height='100' style='border-radius:6px;object-fit:cover'/>",
>     ""
>   ) AS "",
>   file.link AS "Article",
>   join(topics, ", ") AS "Topics",
>   join(status, ", ") AS "Status",
>   default(summary, "-") AS "Summary"
> FROM ""
> WHERE kind = "article"
>   AND (status = "idea"
>        OR contains(status, "idea")
>        OR contains(status, "outline"))
> SORT updated DESC, created DESC, file.mtime DESC
> LIMIT 20
> ```
---

> [!success]+ Ready to publish
> ```dataview
> TABLE WITHOUT ID
>   choice(
>     cover,
>     "<img src='" + replace(cover,"^http:","https:") + "' height='100' style='border-radius:6px;object-fit:cover'/>",
>     ""
>   ) AS "",
>   file.link AS "Article",
>   join(topics, ", ") AS "Topics",
>   join(status, ", ") AS "Status",
>   default(summary, "-") AS "Summary"
> FROM ""
> WHERE kind = "article"
>   AND (contains(status, "ready") OR contains(status, "publish") OR contains(status, "final"))
> SORT updated DESC, created DESC, file.mtime DESC
> LIMIT 20
> ```
---

> [!example]+ Recently touched articles
> ```dataview
> TABLE WITHOUT ID
>   choice(
>     cover,
>     "<img src='" + replace(cover,"^http:","https:") + "' height='80' style='border-radius:6px;object-fit:cover'/>",
>     ""
>   ) AS "",
>   file.link AS "Article",
>   join(topics, ", ") AS "Topics",
>   join(status, ", ") AS "Status",
>   default(summary, "-") AS "Summary"
> FROM ""
> WHERE kind = "article"
> SORT file.mtime DESC
> LIMIT 15
> ```
---

> [!info]+ Published elsewhere
> **Substack**  
> https://substack.com/@r3crsvint3llgnz  
>
> **LinkedIn Articles**  
> https://www.linkedin.com/in/sethrobins1010/  
>
> **Hachyderm / Mastodon**  
> https://hachyderm.io/@r3crsvint3llgnz  