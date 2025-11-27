---
email: 
phone: 
birthday: 
street address: 
city: 
state: 
zip: 
country: 
tags: 
  - {{VALUE:Tag}}
---
> [!discuss]+ To Discuss with {{VALUE:First Name}}
> ```tasks
> not done
> (tag includes #discuss) AND (tag includes #{{VALUE:Tag}})
> hide tags
> short mode
> ```

> [!attention]+ Waiting for {{VALUE:First Name}}
> ```tasks
> not done
> (tag includes #waiting) AND (tag includes #{{VALUE:Tag}})
> hide tags
> short mode
> ```

> [!todo]+ Assigned to {{VALUE:First Name}}
> ```tasks
> not done
> description includes [[{{VALUE:First Name}} {{VALUE:Last Name}}]]
> hide tags
> short mode
> ```

## Meeting Notes

```dataview
TABLE dateformat(file.ctime,"yyyy-MM-dd") AS "Date"
SORT date DESC
WHERE contains(attendees, [[{{VALUE:First Name}} {{VALUE:Last Name}}]])
```

## Notes