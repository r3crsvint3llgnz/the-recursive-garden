---
dg-publish: true
title: Reading Notes (Hub)
section: hubs
tags:
  - hub
  - books
  - reviews
summary: Active shelf, queue, finished, and reviews. Books from Citations; source cards from Zotero Integration.
cover: https://raw.githubusercontent.com/r3crsvint3llgnz/the-recursive-garden/main/src/site/img/user/02-Projects/The%20Recursive%20Garden/_assets/readingnotes.png
---
![[readingnotes.png]]
[[The Recursive Garden|🏠 Home]] · [[Articles|📝 Articles]] · [[About|ℹ️ About]]

> [!note]+ Active shelf
> ```dataview
TABLE WITHOUT ID
  "<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:contain'/>" AS "",
  file.link AS Title,
  default(authors, author) AS Author,
  date(publish).year AS Year
FROM "04-Resources/Books"
WHERE
  (dg-publish = true OR lower(string(dg-publish)) = "true")
  AND (status = "reading" OR contains(status, "reading"))
  AND cover
SORT file.mtime DESC
LIMIT 6
> ```
 ---

> [!tip]+ Up next
> ```dataview
TABLE WITHOUT ID
  "<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:contain'/>" AS "",
  file.link AS Queued,
  default(authors, author) AS Author,
  date(publish).year AS Year,
  summary AS Summary
FROM "04-Resources/Books"
WHERE (dg-publish = true OR lower(string(dg-publish)) = "true")
  AND (status = "to read" OR contains(status, "to read"))
  AND cover
SORT file.mtime DESC
LIMIT 20
> ```
---

> [!example]+ Last finishes
> ```dataview
TABLE WITHOUT ID
  choice(cover, "<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:contain'/>", "") AS "",
  file.link AS Book,
  default(authors, author) AS Author,
  date(publish).year AS Year,
  choice(finished, date(finished), "") AS Finished,
  rating AS "★",
  summary AS Summary
FROM "04-Resources/Books"
WHERE
  (dg-publish = true OR lower(string(dg-publish)) = "true")
  AND lower(string(status)) = "read"
SORT choice(finished, date(finished), file.mtime) DESC
LIMIT 24
> ```
---

> [!success]+ Finished in the last 6 months
> ```dataview
TABLE WITHOUT ID
  choice(cover,"<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:contain'/>", "") AS "",
  file.link AS Book,
  default(authors, author) AS Author,
   date(publish).year AS Year,
  summary AS Summary
FROM "04-Resources/Books"
WHERE
  (dg-publish = true OR lower(string(dg-publish)) = "true")
  AND lower(string(status)) = "read"
  AND finished
  AND date(finished) >= date(today) - dur(6 months)
SORT date(finished) DESC
LIMIT 24
> ```
---

> [!info]+ Reviews & ratings
> ```dataview
TABLE WITHOUT ID
choice(cover,"<img src='" + replace(cover,"^http:","https:") + "' height='120' style='border-radius:6px;object-fit:contain'/>", "") AS "",
file.link AS Book, choice(rating = 5, "★★★★★", choice(rating = 4, "★★★★☆", choice(rating = 3, "★★★☆☆", choice(rating = 2, "★★☆☆☆", choice(rating = 1, "★☆☆☆☆", ""))))) AS "★", dateformat(file.mtime, "yyyy-MM-dd") AS Updated FROM "04-Resources/Books" WHERE (dg-publish = true OR lower(string(dg-publish)) = "true") AND rating SORT file.mtime DESC LIMIT 12
> ```
---

> [!abstract]+ Literature sources
> ```dataview
> LIST FROM "04-Resources/Sources/Literature Sources"
> WHERE (dg-publish=true OR lower(string(dg-publish))="true")
> SORT file.mtime DESC
> LIMIT 20
> ```
---
