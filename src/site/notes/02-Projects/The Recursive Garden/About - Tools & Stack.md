---
{"dg-publish":true,"permalink":"/02-projects/the-recursive-garden/about-tools-and-stack/","title":"Tools & Stack","tags":["about","stack","draft"]}
---

[[02-Projects/The Recursive Garden/About\|← About]]

> [!abstract]+ Core stack & tooling
> A working inventory of the tools I use to build, deploy, and operate systems. This list changes as the work changes.

## Industrial & controls
- DCS/PLC/SCADA (MPC/APC hooks, interlocks, ISA-88/ISA-18.2)
- Historians & events: PI/AF, Canary, PHD
- OPC UA/DA, Modbus/TCP, MQTT **Sparkplug B**, Kepware/UA gateways
- PI Vision / Ignition HMI, alarm hygiene & MOC

## Data & plumbing
- Python/Node on WSL2; pandas/NumPy/statsmodels
- SQLite, Postgres, DuckDB; Parquet/Arrow
- Kafka/Redpanda, MQTT brokers; lightweight ETL
- Cost/constraint models for ops metrics

## ML & optimization
- scikit-learn, XGBoost; feature stores (lite)
- OR-Tools/PuLP (LP/MIP)
- Time-series forecasting & variance reduction
- Model monitoring in production contexts

## LLMs & agentic systems
- Prompt design & **tool-use/function calling**
- Structured outputs (JSON Schema/Pydantic)
- RAG (FAISS/Chroma/pgvector)
- LangChain/LlamaIndex when useful
- Custom agents (policies, evaluators, planners)
- Evals/guardrails (RAGAS-style checks, deterministic parsers)
- Observability (Langfuse/W&B)

## Orchestration & CI
- Node-RED, n8n; Airflow/Prefect
- GitHub Actions/Jenkins
- Task Scheduler/systemd
- FastAPI/Flask microservices
- Docker/Compose for edge deploys

## Cloud & infra
- AWS: S3, Lambda, Step Functions, ECS/Fargate, IoT Core/Greengrass, Timestream
- VPC/VPN/PrivateLink; secrets management
- Grafana/Prometheus/CloudWatch

## Dev & publishing
- VS Code, GitHub, Jupyter
- Obsidian → static publishing
- Dashboards for control-room consumption
