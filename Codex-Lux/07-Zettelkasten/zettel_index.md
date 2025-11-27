---
id: <uuid>
title: "Zettel Index"
type: index
status: active
created: 2025-10-25
updated: 2025-10-25
aliases: []
tags: [moc/local]
kind: operational
context:
  - [[07-Zettelkasten/zettel_index]]
---

# Zettel Index

## Orientation

Owner: [[Seth]] · Status: active · Scope: Zettelkasten tracking and overview

## Working Sets (curate)

- [[Recent Zettels]]
- [[Key Claims]]
- [[Linked Notes]]

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
````

-->

![[00-Meta/Bases/zettels.base#All Zettels]]

## Gateways

- Templates: [[/Templates/Story]], [[/Templates/Epic]], [[/Templates/Task]], [[/Templates/Zettel]]
- Guides: [[00-Meta/Guides/Agile-Task-Workflow]], [[00-Meta/Guides/Tags]]
- Bases: [[00-Meta/Bases/project_management.base]], [[00-Meta/Bases/zettels.base]]

## Changelog (auto)

<!-- reserved -->

```

```
