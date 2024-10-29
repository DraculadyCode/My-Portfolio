// backToTopLoader.js

function loadBackToTop() {
  fetch("../PagesComponents/backToTop.html") // Adjust path as needed
    .then((response) => {
      if (!response.ok) throw new Error("Could not load Back to Top button.");
      return response.text();
    })
    .then((html) => {
      console.log("Back to Top HTML Loaded"); // Add this for debugging
      document.body.insertAdjacentHTML("beforeend", html);

      // Add the smooth scroll event listener
      const backToTopBtn = document.getElementById("backToTopBtn");
      if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    })
    .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", loadBackToTop);
