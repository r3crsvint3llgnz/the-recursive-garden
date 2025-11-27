module.exports = async (tp) => {
  const { execSync } = require("child_process");
  try {
    const output = execSync(
      `curl -s "wttr.in?format=%l:%20%c+%t|Feels+%f|Rain+%p|Hum+%h|Wind+%w|Sunrise+%S|Sunset+%s"`
    ).toString();
    return output.trim();
  } catch (e) {
    return "Weather unavailable";
  }
};

