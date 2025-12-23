---
{"dg-publish":true,"permalink":"/04-resources/molecules/ai-optimizer-infrastructure-roles/","tags":["molecule"]}
---

# AI Optimizer Infrastructure Roles

> [!abstract]+ Summary
---

 The successful deployment of an AI Optimizer Infrastructure relies on a cross-functional team, blending software, data, and OT engineering expertise.

| Key Role                                 | Primary Deliverable(s) / Function                                                                                                                                                                                                                                                                | Key Systems, Methods, and Tools                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **[[Data Engineer / Architect\|Data Engineer / Architect]]**        | **Data Foundation:** Builds and maintains scalable data ingestion (e.g., Lakeflow Connect) and processing pipelines (batch/streaming). Implements the **[[04-Resources/Molecules/Medallion Architecture\|Medallion Architecture]]** to clean, enrich, and unify IT/OT data for analytics.                                                       | Databricks Lakehouse, Delta Lake, Spark Declarative Pipelines, AWS Glue/Athena/Redshift.          |
| **[[ML Engineer / AI Architect\|ML Engineer / AI Architect]]**       | **Model Serving:** Develops, trains, serves, and audits AI models for predictive maintenance, optimization, or quality control. Wraps the resulting optimized command or recommendation in an **Inference Container**.                                                                           | Kubeflow, SageMaker, Docker/Inference Container, Mosaic AI Agent Framework, MLflow.               |
| **[[OT Systems Engineer\|OT Systems Engineer]]**              | **OT Data Extraction:** Configures vendor-sanctioned extraction tools (e.g., creating the "View") to flatten proprietary hierarchical OT data into an analysis-ready format for the cloud. Manages the local OPC UA Server.                                                                      | OSIsoft PI Data Archive & Asset Framework (AF), **PI Integrator for Business Analytics**.         |
| **[[Cloud Architect / Edge Developer\|Cloud Architect / Edge Developer]]** | **Airlock/Transport:** Owns the secure transport pipe to the edge. Develops the **Safety Logic** (e.g., custom Python script running in the edge runtime) that performs range checking and rate-of-change validation on the AI output before handoff to the OT network.                          | AWS IoT Core (MQTT), **AWS IoT Greengrass** (Edge Runtime), OPC UA Client, Custom Python Scripts. |
| **[[Controls Engineer (DCS Engineer)\|Controls Engineer (DCS Engineer)]]** | **Control Authority & UI:** Maintains control authority over the physical process and Level 2 devices (PLCs/DCS). Integrates the vetted AI recommendation into the Human-Machine Interface (HMI), creating a faceplate that includes **ACCEPT/REJECT** buttons for operator control.             | DCS Configuration, DCS Graphics, PLC/DCS.                                                         |
| **[[Security Architect\|Security Architect]]**               | **Governance & Enforcement:** Designs the **Zero Trust Architecture** and policy framework (network-tier and identity-tier policies). Deploys infrastructure elements (e.g., service mesh components, firewalls) to enforce segmentation and control flow, especially regarding the DMZ/Airlock. | Service Mesh, Sidecar Proxies (PEPs), Policy Engine (PE), ABAC (Attribute-Based Access Control).  |

---

>[!info]+ Definition
---



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