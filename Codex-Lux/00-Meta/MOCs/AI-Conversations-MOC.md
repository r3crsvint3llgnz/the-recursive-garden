---
tags: [moc, ai-conversations]
---

# 🤖 AI Conversations MOC

## Recent Conversations

```dataview
TABLE topic, ai-model, date
FROM "08-AI-Conversations"
SORT date DESC
LIMIT 20
```

## By AI Model

### ChatGPT

```dataview
TABLE topic, date
FROM "08-AI-Conversations"
WHERE contains(ai-model, "GPT") OR contains(ai-model, "ChatGPT")
SORT date DESC
LIMIT 10
```

### Claude

```dataview
TABLE topic, date
FROM "08-AI-Conversations"
WHERE contains(ai-model, "Claude")
SORT date DESC
LIMIT 10
```

### Gemini

```dataview
TABLE topic, date
FROM "08-AI-Conversations"
WHERE contains(ai-model, "Gemini")
SORT date DESC
LIMIT 10
```

## By Topic

### Recursive Prompting

```dataview
TABLE ai-model, date
FROM "08-AI-Conversations"
WHERE contains(topic, "recursive") OR contains(topic, "prompting")
SORT date DESC
```

### Writing & Creativity

```dataview
TABLE ai-model, date
FROM "08-AI-Conversations"
WHERE contains(topic, "writing") OR contains(topic, "novel") OR contains(topic, "creative")
SORT date DESC
```

### Agent Development

```dataview
TABLE ai-model, date
FROM "08-AI-Conversations"
WHERE contains(topic, "agent") OR contains(topic, "automation")
SORT date DESC
```

## Capture Methods

- Manual paste using [[AI Conversation|AI Conversation Template]]
- ChatGPT JSON export → `ai-chat-archiver.py`
- Browser extension captures
- API archiving (automated)

## Related

- [[00-Meta/MOCs/Home|Home]]
- [[08-AI-Conversations/README|AI Conversations Folder]]
