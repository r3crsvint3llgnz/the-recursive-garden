---
{"dg-publish":true,"kind":"atom","tags":["atom","data"],"topics":[" AI ","AI Optimizer","Data Quality","Data Governance","Industrial AI"],"source":"https://delta.io/pdfs/dldg_databricks.pdf","pages":"11, 12, 19","citekey":"[[04-Resources/Sources/Literature Sources/leeDeltaLakeDefinitive\|leeDeltaLakeDefinitive]]","created":"2025-11-26T21:41:00","updated":"2025-11-26T21:41:00","molecule":["[[04-Resources/Molecules/ACID Transactions|ACID Transactions]]"],"permalink":"/04-resources/atoms/acid-atomicity/","dgPassFrontmatter":true}
---

# ACID - Atomicity

> [!tip]- Distillation — one idea, in my words
> - Write the irreducible insight. 50–120 words.
> - State the claim/definition in one sentence first.
> - Remove source phrasing; keep mechanism or rule.
> - If you feel the need for “and,” split into another atom.
---

**Atomicity** is the core ACID property ensuring that any set of data modifications is treated as a **single, indivisible unit**. This principle dictates an "all or nothing" result: a transaction must either complete entirely, committing all changes as a **single ordered atomic commit** in the transaction log, or if a failure occurs during the process, the entire transaction must be **rolled back to its original state**.

---
> [!info]- Why it matters – 1-3 bullets on utility, mechanism, implication.
> - What decision does this change?
> - What prediction does this enable?
> - What failure does this prevent?
---

• **Failure Prevention:** It ensures **data integrity** and consistency by guaranteeing that if a process fails mid-operation (e.g., during a data modification), partially completed changes are avoided by rolling back the transaction.

• **Mechanism (Delta Lake):** Achieving atomicity for complex operations (like deleting rows) means the multiple resulting actions (removing old files, adding new files containing unaffected rows) are wrapped into a **single transaction log entry** that is committed indivisibly.

• **Streaming Reliability:** Atomicity supports **idempotent writes** for streaming applications through the use of transaction identifiers (`txnAppId` and `txnVersion`), which allows the system to detect and ignore duplicate write attempts, ensuring integrity across multiple destinations.

---

> [!question]- Links
> - Does this collide/agree with an existing atom?
> - Add at least one forward link to a molecule/canonical note.
> - Add one tag-like topic (2–5 terms, not a dump).
---

- Broader topic: [[Database Transaction Theory\|Database Transaction Theory]], [[Data Management\|Data Management]]
- Related atoms: [[04-Resources/Atoms/ACID - Isolation\|ACID - Isolation]], [[04-Resources/Atoms/ACID - Durability\|ACID - Durability]], [[04-Resources/Atoms/ACID - Consistency\|ACID - Consistency]]
- Upstream source note:

---

> [!quote]- Source excerpt (optional)
> Paste exact quote or figure caption.
---

**Atomicity** | Ensures a transaction is treated as a single, indivisible unit; it either completes entirely or fails entirely. | Operations (like update/delete) are wrapped in a **single ordered atomic commit** in the transaction log file.

If a process fails during a data modification, the transaction must be rolled back to its original state, thereby ensuring the data remains consistent and avoiding partially completed changes.

---
> [!abstract]- Citation block (optional)
> **Source:** {{source}} • **Page:** {{page}} • **Key:** {{citekey}}
---

**Source:** https://delta.io/pdfs/dldg_databricks.pdf • **Page:** 11, 22, 19 • **Key:** [[leeDeltaLakeDefinitive]]

---