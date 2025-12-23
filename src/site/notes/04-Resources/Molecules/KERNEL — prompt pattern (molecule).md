---
{"dg-publish":true,"permalink":"/04-resources/molecules/kernel-prompt-pattern-molecule/","tags":["molecule","prompting","KERNEL"]}
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
>  | File                                                                                                         | topics                                                                           | source                                                                                                      | pages | created                     |
> | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----- | --------------------------- |
> | [[04-Resources/Atoms/KERNEL — Reproducible results\|KERNEL — Reproducible results]]                       | <ul><li>Prompting</li><li>KERNEL</li><li>Reproducibility</li></ul>               | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 8:02 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL is model-agnostic\|KERNEL is model-agnostic]]                                 | <ul><li>Prompting</li><li>KERNEL</li><li>Evaluation</li><li>Production</li></ul> | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 8:02 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL — measurable impact\|KERNEL — measurable impact]]                             | <ul><li>Prompting</li><li>KERNEL</li><li>Metrics</li></ul>                       | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 8:01 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL — Logical structure (CTCF)\|KERNEL — Logical structure (CTCF)]]               | <ul><li> AI </li><li>Prompting</li><li>KERNEL</li></ul>                          | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 8:01 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL — Keep it simple\|KERNEL — Keep it simple]]                                   | <ul><li>Prompt Engineering</li><li>Prompting</li><li> AI </li></ul>              | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 8:00 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL — Explicit constraints\|KERNEL — Explicit constraints]]                       | <ul><li>Prompting</li><li>KERNEL</li><li>Constraints</li></ul>                   | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 7:58 PM - November 09, 2025 |
> | [[04-Resources/Atoms/KERNEL — Easy to verify\|KERNEL — Easy to verify]]                                   | <ul><li>Prompt Engineering</li><li>Prompting</li><li> AI </li></ul>              | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 7:57 PM - November 09, 2025 |
> | [[04-Resources/Atoms/Chain simple prompts; one complex prompt\|Chain simple prompts; one complex prompt]] | <ul><li>Prompting</li><li>Chaining</li><li>KERNEL</li></ul>                      | https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/ |       | 7:57 PM - November 09, 2025 |
> 
{ .block-language-dataview}
---

> [!info]- Auto-list atoms this molecule links to (forward)
>  | File | topics | source | page | created |
> | ---- | ------ | ------ | ---- | ------- |
> 
{ .block-language-dataview}
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
> Related molecules: [[Prompt evaluation\|Prompt evaluation]], [[Prompt chaining\|Prompt chaining]]
---

volodith. “After 1000 Hours of Prompt Engineering, I Found the 6 Patterns That Actually Matter.” _Reddit_, r/PromptEngineering, September 29, 2025. [https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/](https://www.reddit.com/r/PromptEngineering/comments/1nt7x7v/after_1000_hours_of_prompt_engineering_i_found/).

---