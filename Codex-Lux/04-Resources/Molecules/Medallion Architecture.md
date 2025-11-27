---
dg-publish: true
kind: molecule
tags:
  - molecule
topics:
  - AI Optimizer
  -  AI 
  - Industrial AI
status: draft
version: 0.1
created: 2025-11-26T21:01:00
updated: 2025-11-26T21:01:00
---
# Medallion Architecture

> [!abstract]+ Summary
---

 The **Medallion Architecture** is a data design pattern fundamentally used to logically organize and progressively refine data within a **lakehouse architecture**. It structures data flow into a series of distinct, isolated layers—typically three tiers: Bronze, Silver, and Gold—to ensure incremental data quality, consistency, and structure.

This architecture provides a necessary framework for addressing common data quality issues encountered with data in flight, offering predictable lineage and defining clear quality boundaries.

## The Medallion Architecture Layers

| Layer                                                                              | Definition and Name                                                                                                                                                      | Core Purpose                                                                                                                                                                                                                                                             | Key Characteristics & Data State                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[[Medallion Architecture Layer - Bronze\|Bronze]]** (Raw Data)                   | The initial landing point for all data ingested from external source systems (e.g., APIs, databases, event streams).                                                     | **Preservation and Ingestion:** Provides an historical archive, ensuring data lineage, auditability, and the ability to reprocess data if needed. It solves the lack of replay or recovery inherent in simpler systems.                                                  | Data structures correspond to the source systems "as-is". Only **minimal or "just-enough" transformations** are applied (e.g., converting the source format to Delta Lake format). Data assets here have the lowest value ($).                                                                                                                                                   |
| **[[Medallion Architecture Layer - Silver\|Silver]]** (Cleansed and Conformed Data) | The intermediate layer where raw data is filtered, matched, merged, conformed, and cleansed. It acts as a bridge between raw data creation and curated data consumption. | **Enterprise View and Standardization:** Establishes a consistent "Enterprise view" of key business concepts (e.g., master customers, non-duplicated transactions). It serves as the source for self-service analytics, advanced analytics, and inputs for AI/ML models. | This is the **first stable layer** in the architecture. Data is cleansed, filtered, and augmented by joining across other tables. Data quality checks and **constraints** can be enforced here to block bad data. Often follows 3rd-Normal Form or Data Vault-like data models. Data assets here have a moderate value ().                                                       |
| **[[Medallion Architecture Layer - Gold 1\|Gold]]** (Curated Business-Level Tables)  | The most mature, highly curated, and refined data layer, purpose-built to solve specific, explicit business goals.                                                       | **Consumption and Reporting:** Designed for final consumption, high-trust reporting, Business Intelligence (BI) dashboards, and production **AI/ML models** (e.g., performance optimization, predictive maintenance).                                                    | Data models are typically **de-normalized and read-optimized** (e.g., Kimball star schema or Inmon data marts). This layer requires high trust and high consistency, minimizing the likelihood of drastic daily changes. Tables can be implemented as physical tables or virtual tables (views), based on performance requirements. Data assets here have the highest value ($). |

---

>[!info]+ Definition
---

The Medallion Architecture works by applying quality gates and tiers from the point of initial ingestion onward to produce curated data products. This approach aims to provide a unified data foundation for everything from traditional SQL-based Business Intelligence (BI) to advanced Artificial Intelligence (AI) and Machine Learning (ML) workloads.

---
> [!info]+ Auto-list atoms that link to this molecule (backlinks)
>
> ```dataview
> TABLE topics, source, pages, created
> FROM #atom
> WHERE contains(file.outlinks, this.file.link)
> SORT created DESC
> ```
---

> [!info]- Auto-list atoms this molecule links to (forward)
> ```dataview
> TABLE topics, source, page, created
> FROM #atom
> WHERE contains(this.file.outlinks, file.link)
> SORT file.name ASC
> ```
---

> [!example]- Worked example (edit inline)
> **Before (bad):**
>
> **After (pattern applied):**
> 
---

> [!fail]- Anti-patterns
> - 
> - 
> - 
---

> [!question]- FAQ (short answers)
> -
> -
> -
---



---
> [!abstract]- References
> Source:  
> Related molecules:
> ---