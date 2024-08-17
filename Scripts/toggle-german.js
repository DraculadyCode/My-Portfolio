// show-hide-projects-de.js

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more-button");
  const showAllSection = document.getElementById("show-all");
  const showFirstItems = document.querySelector(".show-first");

  // Initially hide the "show-all" section
  showAllSection.style.display = "none";

  // Toggle visibility of portfolio items when "Show More" button is clicked
  showMoreButton.addEventListener("click", function () {
    if (showAllSection.style.display === "none") {
      showAllSection.style.display = "block";
      showFirstItems.style.display = "none";
      showMoreButton.querySelector("button").textContent = "Zeige weniger";
    } else {
      showAllSection.style.display = "none";
      showFirstItems.style.display = "block";
      showMoreButton.querySelector("button").textContent = "Zeige alles";
    }
  });
});
