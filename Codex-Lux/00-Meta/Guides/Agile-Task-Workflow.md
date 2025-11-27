---
tags: [meta, guide, workflow, tasks, agile]
created: 2025-10-13
---

# 🎯 Agile Task Management Workflow

> Complete guide to managing projects, epics, stories, and tasks in Codex Lux

---

## 📋 Table of Contents

1. [System Overview](#system-overview)
2. [Project Hierarchy](#project-hierarchy)
3. [Creating Projects](#creating-projects)
4. [Working with Epics](#working-with-epics)
5. [Managing Stories](#managing-stories)
6. [Task Management](#task-management)
7. [Inbox Processing](#inbox-processing)
8. [Daily Workflow](#daily-workflow)
9. [Weekly Review](#weekly-review)
10. [Priority System](#priority-system)
11. [Task Dependencies](#task-dependencies)
12. [Tips & Best Practices](#tips--best-practices)

---

## System Overview

### Philosophy

Your task management system follows these principles:

1. **Vault-Native**: All work lives in Obsidian
2. **Context-First**: Tasks embedded where they originate
3. **Action-Oriented**: Focus on when you'll do it (scheduled) over when it's due
4. **Agile Structure**: Epic → Story → Task hierarchy
5. **Inbox-First**: All captures funnel through inbox for processing

### Tools

- **Templates**: Quick creation of structured notes
- **Dataview**: Dynamic queries for live dashboards
- **Obsidian Bases**: .base files for filtered views
- **Tasks Plugin** (optional): Enhanced task management with `#task` tag

---

## Project Hierarchy

```text
Project
├── Epic (Major Milestone)
│   ├── Story (Feature/Chunk)
│   │   ├── Task (Atomic Action)
│   │   ├── Task
│   │   └── Task
│   └── Story
│       └── Tasks...
└── Epic
    └── Stories...
```

### Definitions

- **Project**: Defined goal with start/end date (e.g., "Wake Novel")
- **Epic**: Major milestone or feature set (e.g., "Act 1 Complete")
- **Story**: User story or work unit (e.g., "Chapter 1 Draft")
- **Task**: Atomic action item (e.g., "Write opening scene")

---

## Creating Projects

### Step 1: Use Project Template

1. Navigate to `02-Projects/`
2. Create new note using [[Old Project Template|Project Template]]
3. Name it: `Project-Name.md` (e.g., `Wake-Novel.md`)

### Step 2: Set Up Folder Structure

Create these subfolders:

```text
02-Projects/Your-Project/
├── Epics/
├── Stories/
└── Tasks/
```

### Step 3: Fill Project Metadata

```yaml
---
type: project
status: active
start-date: 2025-10-13
target-date: 2026-06-01
epics-total: 0
epics-complete: 0
tags: [project]
---
```

### Step 4: Define Objectives

- What is the project's purpose?
- What are the key objectives?
- How will success be measured?

---

## Working with Epics

### Creating an Epic

1. Navigate to `02-Projects/Your-Project/Epics/`
2. Create note using [[Templates/Epic|Epic Template]]
3. Name it descriptively: `Epic-Name.md`

### Epic Metadata

```yaml
---
type: epic
status: planned
project: "[[Your-Project]]"
target-date: 2025-12-31
stories-total: 0
stories-complete: 0
tags: [epic]
---
```

### Status Values

- `planned` - Not started, in backlog
- `in-progress` - Actively working on stories
- `done` - All stories complete

### Epic Guidelines

- **Scope**: 2-8 weeks of work
- **Stories**: 3-10 stories per epic
- **Target Date**: Set realistic milestone date
- **Goals**: Clear, measurable objectives

---

## Managing Stories

### Creating a Story

1. Navigate to `02-Projects/Your-Project/Stories/`
2. Create note using [[Templates/Story|Story Template]]
3. Name it: `Story-Name.md`

### User Story Format

```markdown
**As a** [role/persona]
**I want** [goal/desire]
**So that** [benefit/value]
```

Example:

```markdown
**As a** reader
**I want** an engaging opening scene
**So that** I'm hooked into the story
```

### Story Metadata

```yaml
---
type: story
status: backlog
priority: medium
epic: "[[Epic-Name]]"
project: "[[Project-Name]]"
story-points: 5
tasks-total: 0
tasks-complete: 0
tags: [story]
---
```

### Story Points

Use Fibonacci sequence: 1, 2, 3, 5, 8, 13

- **1**: Trivial, < 1 hour
- **2**: Simple, 1-2 hours
- **3**: Medium, 2-4 hours
- **5**: Complex, 4-8 hours
- **8**: Very complex, 1-2 days
- **13**: Should be broken down

### Story Status

- `backlog` - Not started
- `in-progress` - Active work
- `done` - All tasks complete

---

## Task Management

### Creating Tasks

#### Method 1: From Template

1. Navigate to `02-Projects/Your-Project/Tasks/`
2. Create note using [[Templates/Task|Task Template]]
3. Fill in metadata

#### Method 2: Quick Capture

1. Capture to [[01-Inbox/Quick/]]
2. Process later (see Inbox Processing)

**Method 3: Tasks Plugin** (if installed)

- Press `Cmd+Shift+T` (or your hotkey)
- Fill in dialog
- Automatically tagged with `#task`

### Task Metadata

```yaml
---
type: task
status: not-started
priority: medium
scheduled: 2025-10-14
due: 2025-10-16
story: "[[Story-Name]]"
epic: "[[Epic-Name]]"
project: "[[Project-Name]]"
blocked-by: []
estimate: 2
tags: [task]
---
```

### Task Status

- `not-started` - In backlog
- `in-progress` - Currently working
- `blocked` - Waiting on dependencies
- `done` - Completed

### Scheduled vs Due

**Scheduled Date**: When you PLAN to work on it

- This is your commitment to yourself
- Block time in your calendar for this
- Focus on this date for planning

**Due Date**: When it MUST be finished

- External deadline or handoff date
- Used for tracking approaching deadlines
- Less important than scheduled for planning

**Best Practice**: Always set scheduled date. Set due date only if there's a real deadline.

---

## Inbox Processing

### Capture Sources

- iOS Funnel & Whisper → `01-Inbox/Voice/`
- Web clips → `01-Inbox/Web/`
- Quick notes → `01-Inbox/Quick/`
- Scanned → `01-Inbox/Scanned/`

### Daily Processing Workflow

**Time**: End of day or next morning (10-15 minutes)

1. **Open Inbox Folders**

   - Review each capture

2. **For Each Item, Ask:**

   - Is this actionable? → Convert to task
   - Is this reference? → Move to Resources
   - Is this a note? → Process to proper location
   - Delete it? → Archive or delete

3. **Converting to Tasks**

   - Use [[Templates/Task|Task Template]]
   - Link to relevant project/story/epic
   - Set priority and scheduled date
   - Move original capture to archive

4. **Quick Capture Template**
   - Already has task conversion section
   - Check boxes for priority, dates, links
   - Create proper task note when processing

---

## Daily Workflow

### Morning Routine (5-10 minutes)

1. **Open Daily Note**

   - Use [[Templates/Daily Notes Template]]
   - Automatically queries today's tasks

2. **Review Sections**

   - **High Priority**: Critical/high tasks
   - **Scheduled for Today**: Your planned work
   - **Overdue**: Address these first

3. **Set Top 3 Focus**

   - Pick 3 most important tasks
   - Add to "Mission Focus" section
   - Block time for these

4. **Process Inbox**
   - Quickly scan new captures
   - Flag urgent items

### During the Day

- **Create tasks inline**: When ideas arise, capture them
- **Update status**: Mark tasks in-progress/done
- **Add notes**: Context, blockers, insights

### Evening Routine (5 minutes)

1. **Complete Tasks**

   - Mark finished tasks as done
   - Note wins in Daily Review

2. **Review Tomorrow**

   - Check tomorrow's scheduled tasks
   - Adjust if needed

3. **Capture Thoughts**
   - Evening Closure section
   - Note bottlenecks and ideas

---

## Weekly Review

### Sunday/Monday Planning (30 minutes)

1. **Review Last Week**

   - Completed tasks (celebrate!)
   - Incomplete tasks (why?)
   - Adjust estimates

2. **Check Project Status**

   - Review active projects
   - Update epic/story progress
   - Identify blockers

3. **Plan This Week**

   - Schedule tasks for the week
   - Set priorities
   - Balance workload

4. **Inbox Zero**

   - Process all inbox items
   - Convert captures to tasks
   - Archive processed items

5. **Update Bases**
   - Open Tasks.base
   - Review orphan tasks (no story)
   - Link or archive them

---

## Priority System

### Priority Levels

**Critical** 🔴

- Emergencies
- Hard deadlines today/tomorrow
- Blocking others
- Use sparingly!

**High** 🟠

- Important deadlines this week
- Key project milestones
- Top 3 daily focus

**Medium** 🟡

- Normal work
- No urgent deadline
- Most tasks should be here

**Low** 🟢

- Nice to have
- Low energy tasks
- When you have extra time

### Priority Guidelines

1. **Default to Medium**: Most tasks are medium priority
2. **High = This Week**: High priority means it's critical this week
3. **Critical = Today/Tomorrow**: Use only for true urgencies
4. **Low = Optional**: When you want to feel productive

### Priority Matrix

|                   | Urgent   | Not Urgent |
| ----------------- | -------- | ---------- |
| **Important**     | Critical | High       |
| **Not Important** | High     | Medium/Low |

---

## Task Dependencies

### Blocking Relationships

Tasks can block other tasks using the `blocked-by` field:

```yaml
blocked-by: ["[[Task-1]]", "[[Task-2]]"]
```

### Creating Task Chains

**Example**: Video Production

1. **Script Writing** (no dependencies)
2. **Recording** (blocked by: Script Writing)
3. **Editing** (blocked by: Recording)
4. **Publishing** (blocked by: Editing)

### Managing Blocked Tasks

1. **Status**: Set to `blocked`
2. **Notes**: Document what you're waiting for
3. **Review**: Check daily if blockers are cleared
4. **Update**: Change to `not-started` when unblocked

---

## Tips & Best Practices

### Task Creation

✅ **DO:**

- Write clear, action-oriented titles
- Use verbs: "Write", "Research", "Review"
- Include acceptance criteria
- Link to context (stories, projects)
- Set realistic estimates

❌ **DON'T:**

- Create vague tasks ("Work on project")
- Forget to set scheduled dates
- Make tasks too large (> 4 hours)
- Leave tasks orphaned (no project link)

### Scheduling

✅ **DO:**

- Schedule tasks when you'll actually do them
- Leave buffer time between tasks
- Schedule deep work for your peak hours
- Batch similar tasks together

❌ **DON'T:**

- Over-schedule (max 5-6 hours of tasks/day)
- Schedule everything for "today"
- Ignore energy levels
- Forget about meetings/commitments

### Story Writing

✅ **DO:**

- Use the user story format
- Define clear acceptance criteria
- Break large stories into smaller ones
- Link all related tasks

❌ **DON'T:**

- Make stories too vague
- Create stories without tasks
- Forget to update completion status
- Mix multiple features in one story

### Epic Planning

✅ **DO:**

- Set clear milestone goals
- Break into 3-10 stories
- Set realistic target dates
- Review progress weekly

❌ **DON'T:**

- Make epics too large (> 8 weeks)
- Forget to update as stories complete
- Set arbitrary deadlines
- Start new epics before finishing old ones

---

## Canvas Dashboard Ideas

Since you're creating your own canvas dashboard, consider these sections:

### Layout Suggestions

#### Top Section: At a Glance

- Today's high priority tasks
- Overdue items
- Current sprint/week progress

#### Middle Section: Projects

- Active project cards
- Epic progress bars
- Story boards (Kanban style)

#### Bottom Section: Metrics & Inbox

- Completion stats
- Inbox count
- Weekly velocity

### Embedded Bases

Drag these .base files onto your canvas:

- `Tasks.base` - All tasks view
- `Stories.base` - Active stories
- `Epics.base` - Epic progress

### Quick Links

Add note links for:

- Today's Daily Note
- Active projects
- Inbox folders
- This workflow guide

---

## Plugin Configuration (Optional)

### Tasks Plugin Setup

1. **Install**: Settings → Community Plugins → "Tasks"
2. **Global Filter**: Set to `#task`
3. **Auto-add Created Date**: Enable
4. **Auto-add Done Date**: Enable
5. **Hide Global Filter**: Enable (cleaner display)

### Hotkey Setup

Recommended hotkeys:

- **Create/Edit Task**: `Cmd+Shift+T`
- **Daily Note**: `Cmd+Shift+D`
- **Quick Capture**: `Cmd+Shift+N`

---

## Troubleshooting

### Tasks Not Showing in Queries

**Check:**

- `type: task` in frontmatter?
- File in `02-Projects/` folder?
- Date format: `YYYY-MM-DD`?
- Status value correct?

### Orphan Tasks

**Solution:**

1. Open `Tasks.base`
2. Filter for tasks with empty `story` field
3. Link to appropriate story or archive

### Dataview Not Working

**Check:**

- Dataview plugin enabled?
- Syntax correct (backticks, FROM, WHERE)?
- Field names match frontmatter?
- File paths correct?

---

## Quick Reference

### File Locations

```text
Templates/
├── Task.md
├── Story.md
├── Epic.md
└── Project.md

02-Projects/
└── [Project-Name]/
    ├── Project-Name.md
    ├── Epics/
    ├── Stories/
    └── Tasks/

01-Inbox/
├── Quick/
├── Voice/
├── Web/
└── Scanned/

Root/
├── Tasks.base
├── Stories.base
└── Epics.base
```

### Common Queries

**Today's Tasks**:

```dataview
FROM "02-Projects"
WHERE type = "task" AND scheduled = date(today)
```

**Overdue Tasks**:

```dataview
FROM "02-Projects"
WHERE type = "task" AND scheduled < date(today) AND status != "done"
```

**Active Stories**:

```dataview
FROM "02-Projects"
WHERE type = "story" AND status = "in-progress"
```

---

## Resources

- [[Templates/Task|Task Template]]
- [[Templates/Story|Story Template]]
- [[Templates/Epic|Epic Template]]
- [[Old Project Template|Project Template]]
- [[Templates/Daily Notes Template|Daily Note Template]]
- [[Templates/Quick-Capture|Quick Capture Template]]
- [[00-Meta/MOCs/Home|Home Dashboard]]
- [[00-Meta/MOCs/Projects-MOC|Projects MOC]]

---

_Last Updated: 2025-10-13_
_Version: 1.0_
