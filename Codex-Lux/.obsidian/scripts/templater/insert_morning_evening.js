module.exports = async (tp) => {
  const templatePath = "Templates/Daily-Habit-Tracker.md";
  // Insert the template into the current file
  await tp.file.include(templatePath);
  // Cursor positioning is handled by <% tp.file.cursor() %> in the template
};
