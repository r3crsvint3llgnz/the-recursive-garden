# Weekly Metrics — Morning/Evening Habit

```dataviewjs
// Sum Metric: fields from daily notes over the last 7 days and count protected block successes
const dv = this.app.plugins.plugins.dataview.api;
const today = dv.date('today');
const sevenDaysAgo = today.minus({ days: 7 });

// Query daily notes from 06-Daily folder
const pages = dv.pages('"06-Daily"')
  .where(p => p.file.day && p.file.day >= sevenDaysAgo && p.file.day <= today);

let sumMetric = 0;
let daysWithMetric = 0;
let protectedBlockSuccesses = 0;
let totalDays = 0;

for (let p of pages) {
  totalDays++;

  // Check for Metric field (numeric value after "Energy: Metric:")
  const metricValue = p["Metric"];
  if (metricValue && !isNaN(metricValue)) {
    sumMetric += Number(metricValue);
    daysWithMetric++;
  }

  // Count "Y" responses for protected block
  const blockSuccess = p["Did THE Block happen"];
  if (blockSuccess && blockSuccess.toString().toUpperCase().includes("Y")) {
    protectedBlockSuccesses++;
  }
}

dv.header(2, "📊 7-Day Summary");
dv.paragraph(`**Total Days Tracked:** ${totalDays}`);
dv.paragraph(`**Protected Block Successes:** ${protectedBlockSuccesses} / ${totalDays} (${totalDays > 0 ? Math.round(protectedBlockSuccesses/totalDays*100) : 0}%)`);
dv.paragraph(`**Metric Sum:** ${sumMetric}`);
dv.paragraph(`**Days with Metric recorded:** ${daysWithMetric}`);
dv.paragraph(`**Average Metric:** ${daysWithMetric > 0 ? (sumMetric/daysWithMetric).toFixed(1) : 'N/A'}`);

dv.header(2, "📝 Daily Breakdown");
dv.table(
  ["Date", "Block Success", "Metric", "File"],
  pages
    .sort(p => p.file.day, 'desc')
    .map(p => [
      p.file.day,
      p["Did THE Block happen"] || "—",
      p["Metric"] || "—",
      p.file.link
    ])
);
```

## How to Use

This report aggregates data from your daily notes in the `06-Daily/` folder over the last 7 days.

**Fields tracked:**

- **Protected Block Success**: Looks for "Y" in the "Did THE Block happen? [Y/N]" field
- **Metric**: Numeric value from the "Energy: Metric:" line

**Setup Requirements:**

1. Ensure Dataview plugin is installed and enabled
2. Daily notes should be in `06-Daily/` folder
3. Use the morning-evening template to ensure proper field formatting

**Troubleshooting:**

- If no data appears, check that your daily notes have the YAML frontmatter or inline fields
- The query looks for fields named exactly "Metric" and "Did THE Block happen"
- Adjust the folder path in the query if your daily notes are elsewhere
