
console.log("Project Loaded");

// Welcome message
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded");

  // Simple interaction example
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.addEventListener("click", () => {
      section.style.backgroundColor = "#eef6ff";
    });
  });
});