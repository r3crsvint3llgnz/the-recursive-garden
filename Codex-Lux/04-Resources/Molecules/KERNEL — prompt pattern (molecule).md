---
dg-publish: true
kind: molecule
tags:
  - molecule
  - prompting
  - KERNEL
topics:
  - Prompting
  - PromptOps
source: https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/
status: draft
version: 0.1
created: 2025-11-09T20:03:00
updated: 2025-11-09T20:03:00
---
# KERNEL — prompt pattern (molecule)

> [!abstract]- Summary
---

 KERNEL is a minimal prompt spec: Keep it simple, Easy to verify, Reproducible results, Narrow scope, Explicit constraints, Logical structure. It standardizes how humans ask and how models fulfill, improving first-try success, speed, and consistency.

---

>[!info]+ Definition
---

A six-part contract for LLM tasks: one goal; verifiable success; pinned versions/inputs; single scope; explicit negative/positive bounds; fixed CTCF scaffold (Context, Task, Constraints, Format).

---
> [!info] Auto-list atoms that link to this molecule (backlinks)
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

> [!tip]- Inclusion criteria for KERNEL
> - Outcome fits in one sentence.
> - Success is checkable without judgment words.
> - No time-relative phrases; versions pinned.
> - Exactly one goal.
> - Hard bounds stated (what not to do).
> - Output format is explicit.
---

> [!note]- CTCF scaffold (fill these)
> **Context (inputs):**  
> - Domain, data, versions, prior artifacts
>
> **Task (one goal):**  
> - Imperative verb + object; ≤ 20 words
>
> **Constraints (bounds):**  
> - Limits: libs, length, time, style bans, forbidden actions
>
> **Format (output spec):**  
> - Target schema / sections / filenames
>
> **Verify (hooks):**  
> - Tiny test input; counts/schema; what to run/compare
>
> > [!tip]- Verification hints
> > - Include testable counts (N examples, ≤ lines, schema keys).
> > - Provide tiny test input.
> > - Add a “VERIFY:” step (command or checklist).
---

> [!example]- Worked example (edit inline)
> **Before (bad):** “Help me write a script to process some data files and make them more efficient.”
>
> **After (KERNEL):**
> ```
> Context: CSV folder with identical columns
> Task: Write Python to merge all CSVs into one
> Constraints: Pandas only; ≤ 50 lines; no external I/O libs
> Format: single file merge.py that writes merged.csv; print row count
> Verify: run on ./test_data to produce merged.csv with N rows
> ```
---

> [!fail]- Anti-patterns
> - Multi-goal prompts (code+docs+tests in one).
> - Vague quality targets (“engaging”, “solid”).
> - “Latest/best practices” without version pins.
---

> [!question]- FAQ (short answers)
> **Does KERNEL reduce creativity?** No; it constrains the contract, not the solution space.  
> **Model-specific?** No; it’s a spec discipline.
---

> [!abstract]- References
> Source:  
> Team examples:  
> Related molecules: [[Prompt evaluation]], [[Prompt chaining]]
---

volodith. “After 1000 Hours of Prompt Engineering, I Found the 6 Patterns That Actually Matter.” _Reddit_, r/PromptEngineering, September 29, 2025. [https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/](https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/).

---