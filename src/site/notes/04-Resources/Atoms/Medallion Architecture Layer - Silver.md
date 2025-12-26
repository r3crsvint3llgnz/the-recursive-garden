---
{"dg-publish":true,"permalink":"/04-resources/atoms/medallion-architecture-layer-silver/","tags":["atom","ingestion","data"]}
---

# Medallion Architecture Layer - Silver

> [!tip]- Distillation — one idea, in my words
> - Write the irreducible insight. 50–120 words.
> - State the claim/definition in one sentence first.
> - Remove source phrasing; keep mechanism or rule.
> - If you feel the need for “and,” split into another atom.
---

The **Silver Layer** is the intermediate stage in the Medallion Architecture where raw data is filtered, matched, merged, and cleansed, applying "just-enough" transformations to refine the dataset. This layer establishes the **"Enterprise view"** of key business entities and transactions, serving as the **first stable layer** in the data pipeline. Its functions include cleaning corrupt rows, implementing **data quality constraints**, and augmenting data by joining across other tables, setting the foundation for advanced analytics and modeling.

---
> [!info]- Why it matters – 1-3 bullets on utility, mechanism, implication.
> - What decision does this change?
> - What prediction does this enable?
> - What failure does this prevent?
---

• **Data Trust and Consistency:** The Silver layer ensures a higher degree of consistency and reliability by performing cleaning and filtering on the raw Bronze data, preventing unexpected or corrupt rows (like the `_corrupt` column) from progressing downstream.

• **Foundation for Advanced Analytics:** This layer provides the normalized, cleansed input data necessary for use cases such as self-service analytics, ad-hoc reporting, advanced analytics, and training data for **AI/ML models**.

• **Enables Data Augmentation:** The Silver layer can be used to augment data by joining data from one or many tables—including other Silver tables or even Gold tables—to produce new refined datasets, facilitating the creation of key business entities.

---

> [!question]- Links
> - Does this collide/agree with an existing atom?
> - Add at least one forward link to a molecule/canonical note.
> - Add one tag-like topic (2–5 terms, not a dump).
---

- Broader topic: [[Data Quality\|Data Quality]], [[Normalization\|Normalization]], [[Data Modeling\|Data Modeling]], [[ELT Methodology\|ELT Methodology]]
- Related atoms: [[04-Resources/Atoms/Medallion Architecture Layer - Bronze\|Medallion Architecture Layer - Bronze]], [[04-Resources/Atoms/Medallion Architecture Layer - Gold\|Medallion Architecture Layer - Gold]], [[Delta Live Tables (DLT) Expectations\|Delta Live Tables (DLT) Expectations]], [[Schema Enforcement\|Schema Enforcement]]
- Upstream source note:

---

> [!quote]- Source excerpt (optional)
> Paste exact quote or figure caption.
---

In the **Silver layer** of the lakehouse, the data from the Bronze layer is matched, merged, conformed and cleansed ("just-enough") so that the Silver layer can provide an "Enterprise view" of all its key business entities, concepts and transactions. (e.g. master customers, stores, non-duplicated transactions and cross-reference tables).

---
> [!abstract]- Citation block (optional)
> **Source:** {{source}} • **Page:** {{page}} • **Key:** {{citekey}}
---

**Source:** https://delta.io/pdfs/dldg_databricks.pdf • **Page:** 205 • **Key:** [[04-Resources/Sources/Literature Sources/leeDeltaLakeDefinitive\|leeDeltaLakeDefinitive]]

---