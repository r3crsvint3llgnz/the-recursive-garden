---
{"dg-publish":true,"kind":"atom","tags":["atom","data","elt","ingestion"],"topics":[" AI ","AI Optimizer","Industrial AI"],"source":"https://delta.io/pdfs/dldg_databricks.pdf","pages":"202","citekey":"leeDeltaLakeDefinitive","created":"2025-11-26T21:07:00","updated":"2025-11-26T21:07:00","molecule":["[[Medallion Architecture]]"],"permalink":"/04-resources/atoms/medallion-architecture-layer-bronze/","dgPassFrontmatter":true}
---

# Medallion Architecture Layer - Bronze

> [!tip]- Distillation — one idea, in my words
> - Write the irreducible insight. 50–120 words.
> - State the claim/definition in one sentence first.
> - Remove source phrasing; keep mechanism or rule.
> - If you feel the need for “and,” split into another atom.
---

The Bronze Layer is the raw data repository within the Medallion Architecture, serving as the initial landing point for all data ingested from external source systems. This layer applies **minimal or "just-enough" transformations**, typically converting the source format into a compatible format (like Delta Lake) while maintaining the original schema "as-is" alongside ingestion metadata (load time, process ID). Its primary purpose is data preservation, acting as a trustworthy **historical archive** to establish foundational data lineage and ensure auditability.

---
> [!info]- Why it matters – 1-3 bullets on utility, mechanism, implication.
> - What decision does this change?
> - What prediction does this enable?
> - What failure does this prevent?
---

• **Failure Prevention:** It solves the lack of replay or recovery capabilities often encountered in data systems where raw data retention is short (e.g., Kafka retention periods of 24 hours to 7 days).

• **Utility/Auditability:** The Bronze Layer provides the historical archive and the first stable point of data lineage, which is essential for auditability, compliance, and tracing the origin of any data downstream.

• **Flexibility:** It enables future architectural agility by allowing engineers to **reprocess** the raw data later to support new use cases or modified data requirements without having to re-read the data from the original source system.

---

> [!question]- Links
> - Does this collide/agree with an existing atom?
> - Add at least one forward link to a molecule/canonical note.
> - Add one tag-like topic (2–5 terms, not a dump).
---

- Broader topic: [[Lakehouse Architecture\|Lakehouse Architecture]], [[ELT Methodology\|ELT Methodology]]
- Related atoms: [[04-Resources/Atoms/Medallion Architecture Layer - Silver\|Medallion Architecture Layer - Silver]], [[Data Lineage\|Data Lineage]]
- Upstream source note:

---

> [!quote]- Source excerpt (optional)
> Paste exact quote or figure caption.
---

The **Bronze layer** is where we land all the data from external source systems. The table structures in this layer correspond to the source system table structures "as-is," along with any additional metadata columns that capture the load date/time, process ID, etc. The focus in this layer is quick Change Data Capture and the ability to provide an historical archive of source (cold storage), data lineage, auditability, reprocessing if needed without rereading the data from the source system.

---
> [!abstract]- Citation block (optional)
> **Source:** {{source}} • **Page:** {{page}} • **Key:** {{citekey}}
---

**Source:** https://delta.io/pdfs/dldg_databricks.pdf • **Page:** 202 • **Key:** [[04-Resources/Sources/Literature Sources/leeDeltaLakeDefinitive|leeDeltaLakeDefinitive]]

---