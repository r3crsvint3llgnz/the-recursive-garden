---
title: Priority System
type: reference
status: living
tags: [ops, priority, execution]
---
# Purpose
Fast, consistent priority calls across all projects with minimal friction.

# Scales
- **Impact (I):** value/risk reduction if done → H / M / L
- **Urgency (U):** time pressure → H (≤7d) / M (8–30d) / L (>30d or none)
- **Effort (E):** work size → S (≤2h) / M (≤1 day) / L (≤2 days)
- **Leverage (Lvg):** how much it unblocks → H (≥3 stories or 1 epic) / M (1–2 stories) / L (none)

# Matrix → Priority
Use this first. Then apply bump rules.

|               | **U: High (≤7d)** | **U: Med (8–30d)** | **U: Low (>30d/none)** |
|---|---|---|---|
| **I: High**   | **P1**            | **P2** (→ **P1** if E=S or Lvg=H) | **P2** (→ **P1** if Lvg=H & E=S) |
| **I: Medium** | **P1** (→ **P2** if E=L) | **P2**            | **P3** |
| **I: Low**    | **P2**            | **P3**             | **P4** (someday) |

# Bump rules
- **Unblocker:** unblocks ≥3 stories or an entire epic → bump one level.
- **Lead-time items:** orders/approvals with long lead times → treat **U as High**.
- **Safety/Compliance/Break-fix:** auto **P1**.
- **Tiny tasks (E=S) tied to active epic:** bump one level to clear friction.

# WIP policy
- **P1 in progress ≤2** at any time.
- **Total in progress ≤3** across the vault.
- Daily run order: P1 → P2 → P3, sorted by due, then leverage.
