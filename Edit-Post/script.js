// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});
