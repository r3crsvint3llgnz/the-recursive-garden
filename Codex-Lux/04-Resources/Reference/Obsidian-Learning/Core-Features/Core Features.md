These tips cover some of the important core features that ship with Obsidian.

```base
filters:
  and:
    - file.path.startsWith("Core Features")
    - file.name != "Core Features"
properties:
  file.name:
    displayName: Tips
  note.tags:
    displayName: Tags
views:
  - type: table
    name: Table
    order:
      - file.name
      - tags
    sort: []
    columnSize:
      file.name: 417
```
