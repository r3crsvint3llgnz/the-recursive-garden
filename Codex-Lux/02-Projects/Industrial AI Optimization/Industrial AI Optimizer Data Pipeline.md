---
dg-publish: true
kind: article
tags:
  - ai
  - article
topics:
  -  AI 
  - AI Optimizer
  - Industrial AI
summary: "Outline of an industrial AI optimizer pipeline: extracting sensor data from PI, ingesting it into AWS via S3 or Kinesis,\r  transforming raw logs into clean Delta/Parquet datasets with Glue or Databricks, storing them in a structured medallion architecture,\r  and delivering them to Kubeflow for data science workflows."
status:
  - draft
molecules:
  - "[[Process Entropy]]"
  - "[[04-Resources/Molecules/ACID Transactions|ACID Transactions]]"
  - "[[AI Optimizer Infrastructure Roles]]"
  - "[[Medallion Architecture]]"
created: 2025-11-26T22:44:00
updated: 2025-11-26T22:44:00
cover: https://raw.githubusercontent.com/r3crsvint3llgnz/the-recursive-garden/main/src/site/img/user/02-Projects/The%20Recursive%20Garden/_assets/aioarchitecture.png
---
# Industrial AI Optimizer Data Pipeline
[[The Recursive Garden|🏠 Home]] · [[Reading Notes|📚 Reading Notes]] · [[Articles|📝 Articles]] · [[About|ℹ️ About]]

![[aioarchitecture.png]]
### **1. Extraction ([[OT Layer]] → [[Edge]])**

- **The Source:** OSIsoft [[PI Data Archive]] & [[Asset Framework (AF)]].
- **The Tool:** **[[PI Integrator for Business Analytics]]**.
- _Why:_ It flattens the hierarchical AF data into a row-column format (like a spreadsheet) that cloud services can actually read. It removes the need for complex PI SDK coding.
- **Alternative Tool:** **[[PI Web API]]** + Custom Python Script (if you want to save money on licensing, but this increases maintenance).
- **The Role:** **[[OT Systems Engineer]]**. They configure the "View" in PI Integrator to select which tags and assets to publish.

### **2. Ingestion ([[Edge]] → [[AWS]])**

- **The Target (AWS):** **[[Amazon S3]]** (Simple Storage Service) or **[[Amazon Kinesis]]** (if streaming real-time).
- **The Method:**
- _Batch:_ PI Integrator writes [[Parquet]]/[[CSV]] files directly to an S3 Bucket (The "Landing Zone" or "[[Medallion Architecture Layer - Bronze|Bronze Layer]]").
- _Stream:_ PI Integrator pushes to Kinesis Data Streams.
- **The Role:** **[[Cloud Data Engineer]]**. They set up the S3 buckets, [[IAM]] roles, and security policies (The "Airlock" permissions) to allow the plant to write data _in_ but not read data _out_.

### **3. Transformation (Raw → Clean)**

- **The Tool:** **[[AWS Glue]]** ([[Serverless]] [[ETL]]) or **Databricks** (running on AWS).
- **The Method:**
- _Cataloging:_ AWS Glue Crawler scans the S3 bucket to understand the schema (columns, types).
- _Cleaning:_ An ETL job ([[Python]]/[[Spark]]) removes bad data (e.g., "I/O Timeout" values), handles missing timestamps, and converts units.
- **The Role:** **[[Data Engineer]]**. They write the [[PySpark]] scripts that turn raw sensor logs into a clean, queryable dataset.

### **4. Final Storage (The "Replica Store")**

- **The Location:** **Amazon S3** (The "[[Medallion Architecture Layer - Silver|Silver]]" or "[[Medallion Architecture Layer - Gold 1|Gold]]" Layer).
- **The Format:** **Delta Lake** or **[[Parquet]]**.
- _Why:_ These formats are compressed and optimized for fast reading by machine learning models.
- **The Role:** Automated by the pipeline.

### **5. Consumption (AWS → [[Kubeflow]])**

- **The Environment:** **Kubeflow** running on **[[Amazon EKS]]** (Elastic Kubernetes Service).
- **The Connection:**
- The Data Scientist uses the **[[AWS SDK]] for Python ([[Boto3]])** or a library like **[[S3FS]]** within their Kubeflow notebook.
- They do _not_ query PI. They query the S3 buckets.
- **The Role:** **[[Data Scientist]]**. They write: df = pd.read_parquet('s3://my-plant-data-gold/reactor_data.parquet').