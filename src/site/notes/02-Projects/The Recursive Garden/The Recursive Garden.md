---
{"dg-publish":true,"permalink":"/02-projects/the-recursive-garden/the-recursive-garden/","title":"The Recursive Garden","metatags":{"description":"A live digital garden exploring Recursive Distinction Dynamics, AI practice, and experimental fiction.","og:title":"The Recursive Garden","og:image":"https://therecursivegarden.netlify.app/_assets/recursive-garden-hero.png"},"contentClasses":"home-hero","tags":["gardenEntry"]}
---

![therecursivegarden.png](/img/user/02-Projects/The%20Recursive%20Garden/_assets/therecursivegarden.png)

> [!abstract] A live research garden
> I'm Seth. I'm autistic and I understand things by taking them apart into **atoms** (small distinctions) and **molecules** (how those pieces interact), then rebuilding them into working systems.
>
> This garden is where I do that work in public.
>
> I’m exploring:
> - **Philosophy & RDD** – what reality looks like if you start from distinctions and recursion  
> - **Applied AI in industry** – pushing industrial manufacturing toward safer, more autonomous operation  
> - **PKM & writing** – turning messy notes into tools, prompts, and stories  
> - **Fiction** – worlds that pressure-test these ideas in human lives
>
> I share what I’m reading, researching, the notes I take, and the experiments that work (and the ones that don’t).
---

> [!abstract] Pick a path
> ```dataview
> TABLE WITHOUT ID "<img src='" + cover + "' height='80' style='border-radius:6px;object-fit:contain'/>" AS "", file.link AS "Area", summary AS "What lives here"
> FROM ""
> WHERE section = "hubs"
> SORT priority ASC
> ```
---

> [!summary]+ Now Reading
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

> [!info] Obsidian Community Vaults
> The Recursive Garden is part of the  
> [Obsidian Community Vaults](https://vaults.obsidian-community.com/).

> [!info]+ Linktree
> https://linktr.ee/r3crsvint3llgnz

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/sethrobinsw)