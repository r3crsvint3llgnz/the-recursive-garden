These tips help you extend the functionality of Obsidian by using additional plugins and code snippets.

```base
filters:
  and:
    - file.path.startsWith("Plugins & Code")
    - file.name != "Plugins & Code"
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