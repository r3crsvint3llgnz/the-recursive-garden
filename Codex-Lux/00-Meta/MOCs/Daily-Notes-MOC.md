---
tags: [moc, daily]
---

# 📅 Daily Notes MOC

## Recent Days

```dataview
TABLE day, file.ctime as "Created"
FROM "06-Daily"
SORT file.name DESC
LIMIT 14
```

## This Week

```dataview
LIST
FROM "06-Daily"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.name DESC
```

## Navigation

- [[Templates/Daily Note Template|Daily Note Template]]
- Use Periodic Notes plugin to auto-create daily notes

## Recurring Sections

Each daily note includes:

- 🎯 Today's Focus
- 📝 Notes & Thoughts
- 🤖 AI Interactions
- ✅ Tasks
- 📚 Reading & Learning
- 🌟 Wins & Reflections

## Related

- [[00-Meta/MOCs/Home|Home]]
