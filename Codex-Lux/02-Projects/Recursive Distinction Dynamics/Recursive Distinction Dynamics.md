---
dg-publish: true
title: Recursive Distinction Dynamics — Project Hub
section: hubs
kind_pm:
  - Project
project:
  - "[[Recursive Distinction Dynamics]]"
status: Active
priority: High
tags:
  - rdd
  - philosophy
  - formalism
  - project
cover: https://raw.githubusercontent.com/r3crsvint3llgnz/the-recursive-garden/main/src/site/img/user/02-Projects/The%20Recursive%20Garden/_assets/rdd.png
description: A computational ontology defining reality via Potential, Distinction, and Recursion.
topics:
  - distinctions
  - recursion
  - entropy
  - gravity
  - perspective
  - consciousness
  - Philosophy
  - Recursive Distinction Dynamics
summary: Central command for the RDD framework and its axiomatic definitions.
---
![[rdd.png]]
[[The Recursive Garden|🏠 Home]] · [[Reading Notes|📚 Reading Notes]] · [[Articles|📝 Articles]] · [[About|ℹ️ About]]

> [!abstract]+ Objective
> To formalize a **constructivist physics of existence** where "Reality" is not made of matter, but of persistent information structures defined by:
> 1.  **Perspective** (The Subject)
> 2.  **Distinction** (The Act)
> 3.  **Recursion** (The Engine)
---

> [!note]+ Scope: The RDD Ontology
> **The Atoms (Primitives):**
> - **$\Omega$ (Potential):** The superposition field; infinite capacity for form.
> - **$\mathcal{D}$ (Distinction):** The fundamental cut $(\Omega, P, C)$.
> - **$P$ (Perspective):** The locus of distinction; structural identity.
> - **$R$ (Recursion):** The update loop driving the system.
> - **$t$ (Time):** The recursion index ($R_i$).
> - **$\Phi$ (Qualia):** Structural history embedded in time.
> - **$H$ (Entropy):** Loss of potential; decoherence.
> - **$G$ (Gravity):** Persistence pressure; resistance to entropy.
> 
> **The Molecules (Syntheses):**
> - **Reality:** Survivorship bias of distinctions under Gravity.
> - **The Distinction Engine:** Any system ($P + R$) generating cuts.
> - **Subjective Continuity:** The impossibility of experiencing non-existence.
---

> [!tip]+ Start here (The Core Loop)
> 1. [[RDD – Potential (Definition)]]
> 2. [[RDD – Perspective (Definition)]]
> 3. [[RDD – Distinction (Definition)]]
> 4. [[RDD – Recursion (Definition)]]
> 5. [[RDD – Gravity (Definition)]]
---

> [!info]+ Methodology
> RDD is tested via **Logic Gates** and **Phenomenological Fit**.
> * *Does it solve the Double Slit?* (Yes, via Interaction of Potentials).
> * *Does it explain Death?* (Yes, via Subjective Continuity).
> * *Does it explain Matter?* (Yes, via Recursive Gravity/Persistence).
---

> [!example]+ Latest Changes
> ```dataview
> TABLE WITHOUT ID file.link AS "Note", status, dateformat(file.mtime,"yyyy-MM-dd") AS "Updated"
FROM "04-Resources/Atoms" OR "04-Resources/Molecules" OR "03-Notes/RDD"
WHERE dg-publish
AND contains(topics, "Recursive Distinction Dynamics")
SORT file.mtime DESC
LIMIT 12
> ```
---

> [!note]+ Atoms (Definitions)
> ```dataview
> LIST FROM "04-Resources/Atoms" 
WHERE contains(tags, "atom") 
AND contains(topics, "Recursive Distinction Dynamics")
AND ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) ) 
SORT file.name
> ```
---

> [!example]+ Molecules (Syntheses)
> ```dataview
> LIST FROM "04-Resources/Molecules" 
WHERE contains(tags, "molecule") 
AND contains(topics, "Recursive Distinction Dynamics")
AND ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) ) 
SORT file.mtime DESC
> ```
---

> [!warning]+ Claims & Hypotheses
> ```dataview
> TABLE WITHOUT ID file.link AS "Claim", status, dateformat(file.mtime,"yyyy-MM-dd") AS "Updated"
FROM "04-Resources/Molecules" OR "03-Notes/RDD"
WHERE ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) )
AND contains(topics, "Recursive Distinction Dynamics")
AND (contains(tags, "claim") OR contains(tags, "hypothesis") OR contains(lower(file.name), "claim"))
SORT file.mtime DESC
> ```
---

## Experiments / Examples

```dataview
LIST FROM "03-Notes/RDD/Examples" WHERE ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) ) SORT file.mtime DESC
````

## Reading Tie-ins

```dataview
TABLE WITHOUT ID file.link AS "Book", summary, year FROM "04-Resources/Books" WHERE ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) )   AND (contains(lower(summary), "logic") OR contains(lower(summary), "philosophy") OR contains(lower(summary), "cognition")) SORT file.mtime DESC LIMIT 12
```

## Tasks

```dataview
TASK FROM "03-Notes/RDD" OR "04-Resources/Atoms" OR "04-Resources/Molecules" WHERE !completed GROUP BY file.link
```

## Changelog

```dataview
TABLE WITHOUT ID file.link AS "Changed", dateformat(file.mtime,"yyyy-MM-dd HH:mm") AS "When"
FROM "03-Notes/RDD" OR "04-Resources/Atoms" OR "04-Resources/Molecules"
WHERE ( ( [dg-publish] = true ) OR ( lower(string([dg-publish])) = "true" ) )
AND contains(topics, "Recursive Distinction Dynamics")
SORT file.mtime DESC
LIMIT 15
```
-----

> [!hint]- Working Rules
> - **Atom:** An irreducible definition. Must connect to at least one other atom.
> - **Molecule:** An emergent property derived from the interaction of Atoms.
> - **The "Realness" Test:** If a concept cannot be described as a manipulation of Potential via Recursion, it is likely a linguistic illusion, not a metaphysical reality.
> - **Gravity Check:** Does this concept explain why it persists? If not, it is Entropy.