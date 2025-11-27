These tips cover some cool workflows enabled by using Obsidian with other apps and services.

```base
filters:
  and:
    - file.path.startsWith("Apps & Services")
    - file.name != "Apps & Services"
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