---
tags: [meta, agent, guidelines, ai]
created: 2025-10-13
version: 1.0
---

# 🤖 Agent Guidelines for Codex Lux

> Instructions for AI coding agents (like Cline) working with this Obsidian vault

---

## 📋 Table of Contents

1. [Philosophy & Principles](#philosophy--principles)
2. [Folder Structure Reference](#folder-structure-reference)
3. [Naming Conventions](#naming-conventions)
4. [Task Management System](#task-management-system)
5. [Template Usage](#template-usage)
6. [Git Workflow (Required)](#git-workflow-required)
7. [Query Preferences](#query-preferences)
8. [Inbox Processing](#inbox-processing)
9. [File Modification Rules](#file-modification-rules)
10. [YAML Conventions](#yaml-conventions)
11. [Best Practices](#best-practices)
12. [What NOT to Do](#what-not-to-do)
13. [Decision Framework](#decision-framework)
14. [Common Operations](#common-operations)
15. [Vault Cleanup & Organization Protocol](#vault-cleanup--organization-protocol)
16. [Integration Points](#integration-points)
17. [Quick Reference](#quick-reference)

---

## Philosophy & Principles

The user values:

- **Organization & Clean Structure**: Everything has its place
- **Best Practices**: Follow established PKM methodologies
- **Systematic Approach**: Agile hierarchy, git workflow, automation
- **Documentation**: Comprehensive guides and instructions
- **Consistency**: Standardized naming, formatting, metadata
- **Context**: Tasks and notes linked to their origins
- **Atomic Notes**: One idea per note, heavily linked
- **Action-Oriented**: Focus on scheduled dates (when you'll do it) over due dates

### Core Principles

1. **Vault-Native**: All work lives in Obsidian
2. **Context-First**: Tasks embedded where they originate
3. **Inbox-First**: All captures funnel through inbox for processing
4. **Link-Heavy**: Bi-directional links between related concepts
5. **Metadata-Driven**: Properties for querying and organization
6. **Git-Always**: Commit all changes with descriptive messages

---

## Folder Structure Reference

### Primary Folders

```text
Codex-Lux/
├── 00-Meta/                 → Vault management, guides, templates, MOCs
│   ├── MOCs/               → Maps of Content (hub notes)
│   ├── Templates/          → Legacy/custom templates
│   └── Guides/             → Workflow documentation
├── 01-Inbox/               → CAPTURE ONLY, must be processed
│   ├── Quick/             → Quick captures
│   ├── Voice/             → Whisper/voice memos
│   ├── Web/               → Web clips
│   └── Scanned/           → Scanned notes
├── 02-Projects/            → Active projects with agile hierarchy
│   └── [Project-Name]/
│       ├── Project.md     → Overview note
│       ├── Epics/         → Major milestones
│       ├── Stories/       → Features/chunks
│       └── Tasks/         → Atomic actions
├── 03-Areas/               → Ongoing responsibilities
├── 04-Resources/           → Reference materials (slip box)
│   ├── Books/             → Book notes
│   └── Reference/         → Reference materials
├── 05-Archive/             → Completed/inactive content
├── 06-Daily/               → Daily notes (YYYY-MM-DD.md)
├── 07-Zettelkasten/        → Atomic knowledge notes
├── 08-AI-Conversations/    → Archived AI chats
├── 09-Writing/             → Creative writing projects
├── 10-Research/            → Research materials
├── Templates/              → PRIMARY templates location (keep here!)
├── Canvas/                 → Canvas files (keep in root)
├── Excalidraw/            → Drawings (keep in root)
└── .obsidian/             → NEVER TOUCH - system config
```

### Folder Purposes

| Folder              | Purpose                  | Content Type                            |
| ------------------- | ------------------------ | --------------------------------------- |
| 00-Meta             | Vault structure & guides | MOCs, templates, workflows              |
| 01-Inbox            | Temporary capture zone   | Unprocessed captures                    |
| 02-Projects         | Active work              | Projects with Epic→Story→Task hierarchy |
| 03-Areas            | Ongoing responsibilities | Recurring themes                        |
| 04-Resources        | Reference knowledge      | Books, articles, reference              |
| 05-Archive          | Completed items          | Inactive projects, old notes            |
| 06-Daily            | Daily journals           | YYYY-MM-DD.md files only                |
| 07-Zettelkasten     | Permanent notes          | Atomic knowledge                        |
| 08-AI-Conversations | AI chat logs             | Conversation archives                   |
| 09-Writing          | Creative work            | Novels, stories, drafts                 |
| 10-Research         | Research                 | Academic/topic research                 |

---

## Naming Conventions

### File & Folder Naming Rules

**Primary Rules:**

1. **Hyphens within words**: `Task-Management`, `Core-Features`
2. **Underscores between distinct concepts**: `Wake-Novel_Act-1`, `Daily-Note_2025-10-13`
3. **Title Case for proper nouns**: `Wake-Novel`, `Codex-Lux`
4. **NO SPACES**: Always convert to hyphens
5. **Dates**: Always `YYYY-MM-DD` format

**Examples:**

✅ **Correct:**

```text
Task-Management-System.md
Wake-Novel_Chapter-1.md
My-Book-Notes.md
2025-10-13.md
Epic-Act-1-Complete.md
```

❌ **Incorrect:**

```text
Task Management System.md    (spaces)
wake_novel_chapter_1.md       (underscores within words)
MyBookNotes.md                (no separators)
10-13-2025.md                 (wrong date format)
epic act 1 complete.md        (spaces + lowercase)
```

### Special Cases

- **Daily Notes**: `YYYY-MM-DD.md` (e.g., `2025-10-13.md`)
- **Projects**: `Project-Name.md` (e.g., `Wake-Novel.md`)
- **Tasks**: Descriptive with verb (e.g., `Write-Opening-Scene.md`)
- **MOCs**: `Topic-MOC.md` (e.g., `Projects-MOC.md`)

---

## Task Management System

### Agile Hierarchy

```text
Project (e.g., "Wake Novel")
├── Epic (major milestone, e.g., "Act 1 Complete")
│   ├── Story (feature/chunk, e.g., "Chapter 1 Draft")
│   │   ├── Task (atomic action, e.g., "Write opening scene")
│   │   ├── Task
│   │   └── Task
│   └── Story
│       └── Tasks...
└── Epic
    └── Stories...
```

### Metadata Schema

**Task Properties:**

```yaml
---
type: task
status: not-started | in-progress | blocked | done
priority: critical | high | medium | low
scheduled: YYYY-MM-DD # When you'll work on it
due: YYYY-MM-DD # Deadline (if exists)
created: YYYY-MM-DD
completed: YYYY-MM-DD
story: "[[Story-Name]]"
epic: "[[Epic-Name]]"
project: "[[Project-Name]]"
blocked-by: ["[[Task-1]]", "[[Task-2]]"]
estimate: [hours or story points]
tags: [task]
---
```

**Story Properties:**

```yaml
---
type: story
status: backlog | in-progress | done
priority: high | medium | low
epic: "[[Epic-Name]]"
project: "[[Project-Name]]"
story-points: [1, 2, 3, 5, 8, 13]
tasks-total: 0
tasks-complete: 0
tags: [story]
---
```

**Epic Properties:**

```yaml
---
type: epic
status: planned | in-progress | done
project: "[[Project-Name]]"
target-date: YYYY-MM-DD
stories-total: 0
stories-complete: 0
tags: [epic]
---
```

**Project Properties:**

```yaml
---
type: project
status: active | on-hold | completed
start-date: YYYY-MM-DD
target-date: YYYY-MM-DD
epics-total: 0
epics-complete: 0
tags: [project]
---
```

### Priority Levels

- **Critical** 🔴: Emergencies, today/tomorrow deadlines, blocking others (use sparingly)
- **High** 🟠: Important this week, key milestones, top 3 daily focus
- **Medium** 🟡: Normal work, no urgent deadline (most tasks)
- **Low** 🟢: Nice to have, low energy tasks, when time permits

### Scheduled vs Due Dates

- **Scheduled**: When you PLAN to work on it (your commitment)
- **Due**: When it MUST be finished (external deadline)
- **Best Practice**: Always set scheduled. Only set due if real deadline exists.

---

## Template Usage

### Available Templates

**Location**: `/Templates/` (PRIMARY)

**Agile Templates:**

- `Task.md` - Atomic action items
- `Story.md` - User stories with task tracking
- `Epic.md` - Major milestones with story rollup
- `Project.md` - Complete project overview

**Daily Templates:**

- `Daily Notes Template.md` - Morning/evening routine with task queries

**Capture Templates:**

- `Quick-Capture.md` - Fast capture with task conversion

**Other Templates:**

- Various planning templates (Weekly Planning, 1-on-1 Meeting, etc.)
- Book Notes, People Notes, etc.

### Template Syntax

- Uses **Templater** plugin: `<% tp.* %>`
- `<% tp.file.title %>` - File name
- `<% tp.file.creation_date("YYYY-MM-DD") %>` - Creation date
- `<% tp.file.cursor() %>` - Cursor position
- `<% tp.date.now("YYYY-MM-DD") %>` - Current date

### Using Templates

1. Create new note
2. Choose appropriate template
3. Fill in YAML frontmatter
4. Complete sections
5. Link to related notes

---

## Git Workflow (Required)

### MANDATORY for All Vault Changes

Every change to the vault MUST be committed to git.

**Standard Workflow:**

```bash
cd "/mnt/c/Users/cntry/iCloudDrive/iCloud~md~obsidian/Codex-Lux"
git add -A
git commit -m "Descriptive message

- Bullet point 1
- Bullet point 2
- Bullet point 3"
git pull --rebase
git push
```

### Commit Message Style

**Format:**

```text
<Imperative verb> <summary>

- Detailed change 1
- Detailed change 2
- Detailed change 3
```

**Examples:**

✅ **Good:**

```text
Add agile task management system

- Created Task, Story, Epic, Project templates
- Updated Daily Notes with task queries
- Added comprehensive workflow guide
- Configured Bases for task filtering
```

✅ **Good:**

```text
Reorganize tutorial content

- Moved tutorial folders to 04-Resources/Reference/
- Updated internal links in Start-Here.md
- Added link to Home.md MOC
```

❌ **Bad:**

```text
Updated stuff
```

❌ **Bad:**

```text
changes
```

### Commit Frequency

- After creating/modifying templates
- After moving/renaming files
- After major organization changes
- After cleanup operations
- Batched related changes together

---

## Query Preferences

### Preferred: Obsidian Bases

**Available Bases:**

- `Tasks.base` - All tasks filtered by type, priority, project
- `Stories.base` - Story tracking by epic
- `Epics.base` - Epic progress by project
- `Books.base` - Book notes tracking
- `Finances.base` - Financial tracking

**Format**: JSON configuration for filtering/sorting/grouping

### Acceptable: Dataview Queries

Use when Bases aren't suitable or for dynamic in-note queries.

**Standard Patterns:**

**Today's Tasks:**

```dataview
TABLE status, project, due, estimate
FROM "02-Projects"
WHERE type = "task"
  AND status != "done"
  AND scheduled = date(today)
SORT priority DESC
```

**Active Stories:**

```dataview
TABLE status, epic, tasks-complete + "/" + tasks-total as "Progress"
FROM "02-Projects"
WHERE type = "story" AND status = "in-progress"
SORT priority DESC
```

---

## Inbox Processing

### Capture Sources

- **iOS Funnel & Whisper** → `01-Inbox/Voice/`
- **Web clips** → `01-Inbox/Web/`
- **Quick notes** → `01-Inbox/Quick/`
- **Scanned docs** → `01-Inbox/Scanned/`

### Agent Processing Rules

❌ **NEVER auto-delete** from inbox
❌ **NEVER auto-process** without user approval
✅ **DO suggest** processing for items older than 7 days
✅ **DO provide** recommendations on categorization
✅ **DO offer** to create proper notes from captures

### Processing Workflow

For each inbox item:

1. **Read content**
2. **Determine type**: Task, note, reference, or delete?
3. **Suggest action**:
   - Task → Create task note with template
   - Note → Move to appropriate folder
   - Reference → Add to Resources
   - Delete → Archive or remove
4. **Wait for approval**
5. **Execute if approved**
6. **Update links** if needed

---

## File Modification Rules

### When Editing Files

1. **Check auto-formatting**: Note how editor formats YAML, lists, spacing
2. **Use `replace_in_file`** for targeted changes
3. **Use `write_to_file`** for new files or major rewrites
4. **Preserve existing structure** unless explicitly changing it
5. **Maintain YAML consistency** with rest of vault

### Auto-Formatting Awareness

The editor may auto-format:

- Converting spaces to proper indentation
- Removing trailing spaces from YAML values
- Adding/removing blank lines
- Adjusting list formatting

**Always use the final formatted version** as reference for future edits.

### Safe Editing Practices

✅ **DO:**

- Read file first before modifying
- Use exact matches in SEARCH blocks
- Include complete lines (no truncation)
- Test critical changes
- Update links after moving files

❌ **DON'T:**

- Assume file structure
- Use partial line matches
- Modify without reading first
- Break existing links
- Change templates without discussion

---

## YAML Conventions

### Standard Format

```yaml
---
type: [type]
status: [status]
tags: [tag1, tag2, tag3]
created: YYYY-MM-DD
---
```

### Rules

1. **Empty values**: No trailing spaces

   ```yaml
   scheduled:        # Correct
   scheduled:        # Wrong (trailing space)
   ```

2. **Dates**: Always `YYYY-MM-DD`

   ```yaml
   created: 2025-10-13     # Correct
   created: 10/13/2025     # Wrong
   ```

3. **Tags**: Array format

   ```yaml
   tags: [task, high-priority]    # Correct
   tags: task, high-priority      # Wrong (no brackets)
   ```

4. **Booleans**: Lowercase

   ```yaml
   is-task: true      # Correct
   is-task: True      # Wrong
   ```

5. **Links in values**: Quoted

   ```yaml
   project: "[[Wake-Novel]]"     # Correct
   project: [[Wake-Novel]]       # Wrong (no quotes)
   ```

6. **Arrays of links**: Quoted elements

   ```yaml
   blocked-by: ["[[Task-1]]", "[[Task-2]]"]    # Correct
   blocked-by: [[[Task-1]], [[Task-2]]]        # Wrong
   ```

---

## Best Practices

### Obsidian Best Practices (User Follows These)

1. **Atomic Notes**: One idea per note
2. **Heavy Linking**: Connect related concepts
3. **MOCs over Tags**: Use Maps of Content for organization
4. **Properties for Queries**: Metadata enables dynamic views
5. **Scheduled over Due**: Focus on when you'll work
6. **Context-First Tasks**: Tasks live where they originate
7. **Inbox Processing**: Daily review and processing
8. **Regular Reviews**: Weekly project reviews

### Agent Best Practices

1. **Ask Before Acting**: Confirm major changes
2. **Preserve Content**: Archive, don't delete
3. **Maintain Links**: Update cross-references
4. **Follow Conventions**: Use established patterns
5. **Document Changes**: Clear commit messages
6. **Be Systematic**: Work through priorities
7. **Verify Results**: Test after changes

---

## What NOT to Do

### ❌ Forbidden Actions

1. **DON'T delete user content** without explicit permission
2. **DON'T move Templates/ folder** (keep in root)
3. **DON'T move Canvas/ or Excalidraw/** (keep in root)
4. **DON'T touch .obsidian/ folder** (system config)
5. **DON'T auto-process inbox** without approval
6. **DON'T use spaces in filenames**
7. **DON'T create deep nested folders** (max 2-3 levels)
8. **DON'T modify files without reading them first**
9. **DON'T break links** when moving/renaming files
10. **DON'T commit without descriptive messages**
11. **DON'T use Dataview when Bases would work**
12. **DON'T modify active project structures** without discussion

### ⚠️ Actions Requiring Approval

- Deleting any files
- Moving template locations
- Restructuring active projects
- Processing inbox items
- Major folder reorganization
- Renaming files with many backlinks
- Bulk metadata changes

---

## Decision Framework

### When Uncertain

1. **Ask the user** via `ask_followup_question`
2. **Check existing patterns** in similar files
3. **Default to simpler solution**
4. **Prefer established conventions** over new ones
5. **Document significant decisions**
6. **Be conservative** with changes

### Decision Tree

```text
Is this a standard operation with clear rules?
├─ Yes → Proceed with confidence
└─ No → Is there an existing pattern to follow?
    ├─ Yes → Follow the pattern
    └─ No → Ask the user
```

---

## Common Operations

### Creating a Project

1. Navigate to `02-Projects/`
2. Create note using `Project.md` template
3. Name: `Project-Name.md`
4. Create subfolders:

   ```text
   02-Projects/Project-Name/
   ├── Epics/
   ├── Stories/
   └── Tasks/
   ```

5. Fill project metadata
6. Link from `Projects-MOC.md`

### Creating an Epic

1. Navigate to `02-Projects/Project-Name/Epics/`
2. Use `Epic.md` template
3. Name descriptively: `Epic-Name.md`
4. Link to project: `project: "[[Project-Name]]"`
5. Define goals and target date

### Creating a Story

1. Navigate to `02-Projects/Project-Name/Stories/`
2. Use `Story.md` template
3. Write user story format
4. Link to epic and project
5. Set story points

### Creating a Task

1. Navigate to `02-Projects/Project-Name/Tasks/`
2. Use `Task.md` template
3. Use verb in name: `Write-Opening-Scene.md`
4. Link to story, epic, project
5. Set priority and scheduled date
6. Add acceptance criteria

### Processing Inbox Item

1. Read the capture
2. Determine type (task/note/reference)
3. Create appropriate note with template
4. Link to relevant locations
5. Suggest archiving original

---

## Vault Cleanup & Organization Protocol

### When User Requests Cleanup

Follow this systematic approach:

#### Phase 1: Assessment & Planning

##### A. Scan & Identify Issues

1. **Misplaced Files**

   - Files in wrong folders
   - Files in vault root
   - Orphaned files

2. **Naming Issues**

   - Files with spaces
   - Inconsistent capitalization
   - Missing dates in daily notes
   - Generic names

3. **Structural Issues**

   - Empty folders
   - Incorrect nesting depth
   - Duplicate purposes
   - Missing subfolders

4. **Metadata Issues**

   - Missing YAML frontmatter
   - Incorrect `type:` values
   - Broken links
   - Inconsistent tags

5. **Inbox Status**
   - Count unprocessed items
   - Age of items (>7 days?)
   - Items that should be processed

##### B. Present Cleanup Plan

Before making ANY changes:

- List all issues found
- Propose specific actions
- Estimate scope (files affected)
- **Wait for user approval**

#### Phase 2: Execution (Only After Approval)

**Priority Order:**

1. **Critical Structure** (safety first)

   - Move misplaced system files
   - Fix broken folder structure
   - Preserve templates and bases

2. **File Organization**

   - Move files to correct folders
   - Rename following conventions
   - Update internal links

3. **Metadata Cleanup**

   - Add missing YAML
   - Fix type designations
   - Standardize date formats

4. **Link Maintenance**

   - Update broken links
   - Verify cross-references
   - Check MOC accuracy

5. **Inbox Processing** (with guidance)
   - Suggest processing old items
   - Convert captures to notes
   - Archive processed items

#### Cleanup DO's

✅ **Move Files to Correct Locations**

```text
Wrong: /My-Note.md
Right: /04-Resources/Reference/My-Note.md
```

✅ **Rename with Proper Conventions**

```text
Wrong: my note with spaces.md
Right: My-Note-With-Hyphens.md
```

✅ **Add Missing Metadata**

```yaml
---
type: [appropriate type]
tags: [relevant-tags]
created: YYYY-MM-DD
---
```

✅ **Update Links After Moving**

- Use search/replace for bulk updates
- Verify links still work
- Update MOCs if needed

✅ **Consolidate Duplicates**

- Merge duplicate content
- Keep most complete version
- Archive redundant files

✅ **Clean Empty Folders**

- Remove if truly empty
- Check for hidden files
- Preserve structure folders

#### Cleanup DON'Ts

❌ **Delete User Content** without permission
❌ **Move Files Without Updating Links**
❌ **Change Template Locations**
❌ **Auto-Process Inbox**
❌ **Rename Notes with Many Backlinks** without care
❌ **Modify Active Project Structures** without approval

#### Folder-Specific Rules

**`01-Inbox/`**

- Flag items >7 days old
- Suggest processing, don't auto-move
- Organize by subfolder

**`02-Projects/`**

- Verify Epics/Stories/Tasks structure
- Check task metadata
- Ensure proper linking
- Archive completed → `05-Archive/`

**`04-Resources/`**

- Maintain slip box organization
- Don't over-categorize
- Keep relatively flat
- Reference material only

**`06-Daily/`**

- Ensure YYYY-MM-DD.md format
- Check frontmatter consistency
- Daily notes only

**`07-Zettelkasten/`**

- Atomic notes only
- Each note must have links
- Proper metadata
- No project-specific content

**`Templates/`, `Canvas/`, `Excalidraw/`**

- KEEP IN ROOT
- Don't move or rename
- System folders

**`.obsidian/`**

- NEVER TOUCH
- System configuration

#### Cleanup Workflow Template

```markdown
## Vault Cleanup Report

### Issues Found

- [ ] X files in wrong locations
- [ ] X files with naming issues
- [ ] X files missing metadata
- [ ] X broken links
- [ ] X items in inbox (Y >7 days old)

### Proposed Actions

**File Moves:**

1. Move `/File.md` → `/04-Resources/Reference/File.md`
2. [...]

**Renames:**

1. Rename `my file.md` → `My-File.md`
2. [...]

**Metadata Fixes:**

1. Add YAML to X files
2. Fix date formats in Y files

**Link Updates:**

- Update Z links after moves

**Inbox:**

- Process X items

### Risk Assessment

- [Low/Medium/High] risk
- Backlinks affected: N
- Recommendation: [Proceed/Caution/Review]

### Execution Plan

1. [Step by step]
2. [...]
```

#### Post-Cleanup Tasks

1. **Verify Everything Works**

   - Test links
   - Check Bases load
   - Verify graph view

2. **Document Changes**

   - Create cleanup summary
   - List moves/renames
   - Note issues

3. **Git Commit**

   ```bash
   git add -A
   git commit -m "Vault cleanup: [summary]

   - Moved X files to correct locations
   - Renamed Y files for consistency
   - Fixed Z broken links
   - Updated metadata on N files"
   git pull --rebase && git push
   ```

4. **Summary Report**
   - What was done
   - Files affected
   - Remaining issues
   - Recommendations

#### Red Flags / Stop & Ask

⚠️ **Stop and ask if:**

- More than 50 files need moving
- Template files affected
- Active project changes needed
- Many backlinks would break (>10)
- Many inbox items to process
- Unclear where something belongs
- User content might be lost
- Major structural changes

#### Cleanup Frequency

**Recommended:**

- Daily: Quick inbox scan
- Weekly: Review misplaced files
- Monthly: Deep cleanup session
- Quarterly: Structure review

**Agent-Initiated:**

- Offer cleanup when detecting issues
- Mention during related work
- Never cleanup without asking

#### Cleanup Philosophy

**Principles:**

1. **Ask first, act second**
2. **Preserve content** (archive, don't delete)
3. **Maintain links** (update or warn)
4. **Follow conventions**
5. **Document changes**
6. **Be systematic**
7. **Verify results**

**Goal:** Clean, organized vault following best practices while preserving all content and connections.

---

## Integration Points

### Related Systems

**Tools & Scripts:**

- `~/Projects/tools/obsidian-agents/` - Python automation agents
- `~/Projects/tools/books-processing/` - Book note processing
- Obsidian plugins: Dataview, Templater, Tasks (optional)

**Git Repository:**

- Remote: `https://github.com/gb9jatrtl/obsidian-icloud.git`
- Branch: `main`
- Always sync changes

**Projects in Vault:**

- Wake Novel (creative writing)
- Various research projects
- Book notes system

### External Capture

**iOS Apps:**

- Funnel → Voice captures
- Whisper → Transcriptions
- All go to `01-Inbox/Voice/`

**Processing:**

- User reviews daily
- Converts to proper notes
- Archives originals

---

## Quick Reference

### File Paths

```text
/Templates/                    → Primary templates
/00-Meta/MOCs/                → Maps of Content
/00-Meta/Guides/              → Workflow guides
/02-Projects/[Project]/       → Project structure
  ├── Epics/
  ├── Stories/
  └── Tasks/
/01-Inbox/[Source]/           → Captures
/Tasks.base, Stories.base     → Obsidian Bases
```

### Common Commands

**Git:**

```bash
cd "/mnt/c/Users/cntry/iCloudDrive/iCloud~md~obsidian/Codex-Lux"
git add -A
git commit -m "Message"
git pull --rebase && git push
```

**Query Today's Tasks:**

```dataview
FROM "02-Projects"
WHERE type = "task" AND scheduled = date(today)
```

### Metadata Quick Ref

```yaml
---
type: task | story | epic | project
status: [varies by type]
priority: critical | high | medium | low
scheduled: YYYY-MM-DD
due: YYYY-MM-DD
tags: [tag1, tag2]
---
```

### Key Templates

- Task: `/Templates/Task.md`
- Story: `/Templates/Story.md`
- Epic: `/Templates/Epic.md`
- Project: `/Templates/Project.md`
- Daily: `/Templates/Daily Notes Template.md`

### Important Docs

- Agile Workflow: `/00-Meta/Guides/Agile-Task-Workflow.md`
- This Guide: `/AGENT.md`
- Home Dashboard: `/00-Meta/MOCs/Home.md`
- Tutorial: `/04-Resources/Reference/Obsidian-Learning/Start-Here.md`

---

## Version History

- **v1.0** (2025-10-13): Initial creation with comprehensive guidelines

---

_This document is maintained as a living guide for AI agents working with Codex Lux._
