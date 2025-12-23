---
{"dg-publish":true,"permalink":"/04-resources/molecules/process-entropy/","tags":["molecule"]}
---

# Process Entropy

> [!abstract]+ Summary
---

 ### **The Molecule: Process Entropy**

- _Concept:_ The aggregate force that pulls a model's accuracy toward zero over time.
    
- _Constituent Atoms:_
    
    1. **[[Physical Drift\|Physical Drift]]:** The plant rots (fouling, catalyst decay).
        
    2. **[[Digital Drift\|Digital Drift]]:** The map changes (tags renamed, firmware updates).
        
    3. **[[The Retraining Imperative\|The Retraining Imperative]]:** The strategic requirement to treat models as disposable.

---

>[!info]+ Definition
---

Process Entropy is the inevitable degradation of model accuracy in industrial environments caused by physical changes (fouling, catalyst decay, weather) and digital drift (tag renaming, firmware updates). Unlike static datasets in finance or tech, the "ground truth" of a chemical plant is a moving target. Therefore, an industrial AI model is not a finished product but a decaying asset that requires continuous, automated retraining infrastructure to remain valid.

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