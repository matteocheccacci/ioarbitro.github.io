// js/content.js
const corsoLink = "https://forms.office.com/r/0c8Vek4A6z";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("signup-button");
  if (button) {
    button.addEventListener("click", () => {
      window.open(corsoLink, "_blank");
    });
  }
});
