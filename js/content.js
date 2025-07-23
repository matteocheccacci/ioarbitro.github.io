// js/content.js
const corsoLink = "https://docs.google.com/forms/d/e/1FAIpQLSdtBawvUb9IuE-jcBjp6vnfvHvZ9ci_EBLR4YGvstx_5lfzQw/viewform";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("signup-button");
  if (button) {
    button.addEventListener("click", () => {
      window.open(corsoLink, "_blank");
    });
  }
});
