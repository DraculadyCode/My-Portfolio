// script.js

document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    console.log("Dark mode toggled"); // Check if this logs to the console when clicked
  });
