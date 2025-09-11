// Tab switching
function showTab(tabName, event) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab");
  
  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));
  
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}

// Dark mode toggle
const darkToggle = document.getElementById("darkMode");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
