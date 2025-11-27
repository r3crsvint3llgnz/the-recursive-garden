---
id: <uuid>
title: "Projects Index"
type: index
status: active
created: 2025-10-25
updated: 2025-10-25
aliases: []
tags: [moc/local]
kind: operational
context:
  - [[02-Projects/projects_index]]
---

# Projects Index

## Orientation

Owner: [[Seth]] · Status: active · Scope: Project tracking and overview

## Working Sets (curate)

- [[Wake Novel]]
- [[Safe Git Agent]]
- [[Other Project]]

## Hotspots (auto)

<!-- reserved -->

## Operational Views

````dataview
TABLE file.link AS Note, file.mtime AS Updated
FROM this.file.folder
SORT file.mtime DESC
LIMIT 5

<!--
```dataview
TABLE file.link AS Note, file.mtime AS Updated
FROM this.file.folder
SORT file.mtime DESC
LIMIT 5

## Gateways

- Templates: [[/Templates/Story]], [[/Templates/Epic]], [[/Templates/Task]], [[/Templates/Zettel]]
- Guides: [[00-Meta/Guides/Agile-Task-Workflow]], [[00-Meta/Guides/Tags]]
- Bases: [[00-Meta/Bases/project_management.base]], [[00-Meta/Bases/zettels.base]]

## Changelog (auto)

<!-- reserved -->

```

```
````
