---
{"dg-publish":true,"permalink":"/04-resources/atoms/acid-durability/","tags":["atom"]}
---

# ACID - Durability

> [!tip]- Distillation — one idea, in my words
> - Write the irreducible insight. 50–120 words.
> - State the claim/definition in one sentence first.
> - Remove source phrasing; keep mechanism or rule.
> - If you feel the need for “and,” split into another atom.
---

**Durability** is the final ACID property guaranteeing that once a transaction has been successfully committed, the changes are **permanent** and will survive any subsequent system failures, restarts, or power losses. This permanence is fundamentally ensured by the transaction log, which functions as an **immutable record** permanently logging all changes made to the data.

---
> [!info]- Why it matters – 1-3 bullets on utility, mechanism, implication.
> - What decision does this change?
> - What prediction does this enable?
> - What failure does this prevent?
---

• **Permanent Record:** Durability guarantees that data changes are persistent and that the committed state of the table cannot be lost due to later operational incidents.

• **Mechanism (Immutable Log):** The underlying mechanism in Delta Lake is the **immutable transaction log**, which permanently records every change, thereby ensuring durability.

• **Enables Auditing:** The permanent record of every atomic transaction within the transaction log makes features like **Time Travel** possible, allowing users to query previous versions of a table and providing a crucial mechanism for audit history.

---

> [!question]- Links
> - Does this collide/agree with an existing atom?
> - Add at least one forward link to a molecule/canonical note.
> - Add one tag-like topic (2–5 terms, not a dump).
---

- Broader topic: [[Database Transaction Theory\|Database Transaction Theory]], [[Data Management\|Data Management]], [[Disaster Recovery\|Disaster Recovery]]
- Related atoms: [[04-Resources/Atoms/ACID - Isolation\|ACID - Isolation]], [[]]
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