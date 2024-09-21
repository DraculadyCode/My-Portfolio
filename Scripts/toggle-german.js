// show-hide-projects-de.js

document.addEventListener("DOMContentLoaded", () => {
  // Get the button and the "show-all" section
  const showMoreButton = document.getElementById("show-more-button");
  const showAllSection = document.getElementById("show-all");

  // Initial state: hide the "show-all" section and change button text to "Zeige alles"
  showAllSection.style.display = "none";
  let isShowingAll = false;

  // Function to toggle visibility of "show-all" section and button text
  function toggleProjects() {
    if (isShowingAll) {
      showAllSection.style.display = "none";
      showMoreButton.querySelector("button").textContent = "Zeige alles"; // German: Show all
    } else {
      showAllSection.style.display = "block";
      showMoreButton.querySelector("button").textContent = "Zeige weniger"; // German: Show less
    }
    isShowingAll = !isShowingAll;
  }

  // Add click event listener to the button
  showMoreButton.addEventListener("click", toggleProjects);
});

// // show-hide-projects-de.js

// document.addEventListener("DOMContentLoaded", function () {
//   const showMoreButton = document.getElementById("show-more-button");
//   const showAllSection = document.getElementById("show-all");
//   const showFirstItems = document.querySelector(".show-first");

//   // Initially hide the "show-all" section
//   showAllSection.style.display = "none";

//   // Toggle visibility of portfolio items when "Show More" button is clicked
//   showMoreButton.addEventListener("click", function () {
//     if (showAllSection.style.display === "none") {
//       showAllSection.style.display = "block";
//       showFirstItems.style.display = "none";
//       showMoreButton.querySelector("button").textContent = "Zeige weniger";
//     } else {
//       showAllSection.style.display = "none";
//       showFirstItems.style.display = "block";
//       showMoreButton.querySelector("button").textContent = "Zeige alles";
//     }
//   });
// });
