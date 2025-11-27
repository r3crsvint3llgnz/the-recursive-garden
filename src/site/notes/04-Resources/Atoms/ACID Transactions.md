---
{"dg-publish":true,"kind":"atom","tags":["atom"],"topics":["Industrial AI"," AI "],"source":"https://delta.io/pdfs/dldg_databricks.pdf","pages":"382","citekey":"leeDeltaLakeDefinitive","created":"2025-11-26T20:37:00","updated":"2025-11-26T20:37:00","molecule":null,"permalink":"/04-resources/atoms/acid-transactions/","dgPassFrontmatter":true}
---

# ACID Transactions

> [!tip]- Distillation — one idea, in my words
> - Write the irreducible insight. 50–120 words.
> - State the claim/definition in one sentence first.
> - Remove source phrasing; keep mechanism or rule.
> - If you feel the need for “and,” split into another atom.
---

The acronym ACID stands for atomicity, consistency, isolation, and durability.

| ACID Component      | Definition/Function                                                                                             | Key Mechanism in Delta Lake                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **[[04-Resources/Atoms/ACID - Atomicity\|ACID - Atomicity]]**   | Ensures a transaction is treated as a single, indivisible unit; it either completes entirely or fails entirely. | Operations (like update/delete) are wrapped in a **single ordered atomic commit** in the transaction log file. |
| **[[Consistency\|Consistency]]** | Ensures data remains in a valid state after any transaction.                                                    | Rollback of changes upon process failure; Schema enforcement/evolution.                                        |
| **[[Isolation\|Isolation]]**   | Guarantees that concurrent transactions do not interfere with one another.                                      | Multiversion Concurrency Control (MVCC); Snapshot isolation for reads.                                         |
| **[[Durability\|Durability]]**  | Guarantees that once a transaction is committed, the changes are permanent.                                     | The immutable transaction log permanently records all changes.                                                 |

---
> [!info]- Why it matters – 1-3 bullets on utility, mechanism, implication.
> - What decision does this change?
> - What prediction does this enable?
> - What failure does this prevent?
---



---

> [!question]- Links
> - Does this collide/agree with an existing atom?
> - Add at least one forward link to a molecule/canonical note.
> - Add one tag-like topic (2–5 terms, not a dump).
---

- Broader topic:
- Related atoms:
- Upstream source note:

---

> [!quote]- Source excerpt (optional)
> Paste exact quote or figure caption.
---



---
> [!abstract]- Citation block (optional)
> **Source:** {{source}} • **Page:** {{page}} • **Key:** {{citekey}}
---



---