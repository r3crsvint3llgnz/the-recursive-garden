---
{"dg-publish":true,"permalink":"/04-resources/molecules/acid-transactions/","tags":["molecule","data","crud"]}
---

# ACID Transactions

> [!abstract]+ Summary
---

 The acronym ACID stands for atomicity, consistency, isolation, and durability.

| ACID Component                          | Definition/Function                                                                                             | Key Mechanism in Delta Lake                                                                                    |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **[[04-Resources/Atoms/ACID - Atomicity\|Atomicity]]**     | Ensures a transaction is treated as a single, indivisible unit; it either completes entirely or fails entirely. | Operations (like update/delete) are wrapped in a **single ordered atomic commit** in the transaction log file. |
| **[[ACID - Consistency 1\|Consistency]]** | Ensures data remains in a valid state after any transaction.                                                    | Rollback of changes upon process failure; Schema enforcement/evolution.                                        |
| **[[04-Resources/Atoms/ACID - Isolation\|Isolation]]**     | Guarantees that concurrent transactions do not interfere with one another.                                      | Multiversion Concurrency Control (MVCC); Snapshot isolation for reads.                                         |
| **[[04-Resources/Atoms/ACID - Durability\|Durability]]**   | Guarantees that once a transaction is committed, the changes are permanent.                                     | The immutable transaction log permanently records all changes.                                                 |

---

>[!info]+ Definition
---

ACID transactions represent a set of four core properties designed to guarantee the reliable processing of database transactions, ensuring that data modification operations (such as [[CRUD\|CRUD]] — [[Create\|Create]], [[Read\|Read]], [[Update\|Update]], [[Delete\|Delete]]) are handled safely and consistently.

The primary purpose of ACID transaction protection is to ensure **data integrity** when multiple concurrent clients or tasks access the data. Support for transactions is considered critical whenever data accuracy and sequential insertion order are important, which applies to nearly all production use cases.

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