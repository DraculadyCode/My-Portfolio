function onCaptchaSuccess() {
  // Enable all links and buttons after successful CAPTCHA
  const linksAndButtons = document.querySelectorAll("a, button");
  linksAndButtons.forEach((element) => {
    element.classList.remove("disabled");
    element.style.cursor = "pointer"; // Reset cursor to default
  });
}

// Disable links and buttons by default, except for the language switcher
document.addEventListener("DOMContentLoaded", function () {
  const linksAndButtons = document.querySelectorAll("a, button");
  linksAndButtons.forEach((element) => {
    // Skip disabling if the link is part of the language switcher
    if (element.closest("#language-switcher")) return;

    // Disable other links and buttons
    element.classList.add("disabled");
    element.style.cursor = "not-allowed"; // Change cursor to 'not-allowed'

    element.addEventListener("click", (e) => {
      if (element.classList.contains("disabled")) {
        e.preventDefault(); // Prevent default action
        alert("Please verify you are a human first!"); // Show alert message
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      }
    });
  });
});

// function onCaptchaSuccess() {
//   // Enable all links and buttons after successful CAPTCHA
//   const links = document.querySelectorAll("a, button");
//   links.forEach((link) => {
//     link.classList.remove("disabled");
//   });
// }

// // Disable links and buttons by default, except for the language switcher
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("a, button");
//   links.forEach((link) => {
//     // Skip disabling if the link is part of the language switcher
//     if (link.closest("#language-switcher")) return;

//     // Disable other links and buttons
//     link.classList.add("disabled");
//     link.addEventListener("click", (e) => {
//       if (link.classList.contains("disabled")) {
//         e.preventDefault();
//         alert("Please verify you are human first!");
//       }
//     });
//   });
// });

// ? Disable all links
// function onCaptchaSuccess() {
//   const links = document.querySelectorAll("a, button");
//   links.forEach((link) => {
//     link.classList.remove("disabled");
//   });
// }

// // Disable links and buttons by default
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("a, button");
//   links.forEach((link) => {
//     link.classList.add("disabled");
//     link.addEventListener("click", (e) => {
//       if (link.classList.contains("disabled")) {
//         e.preventDefault();
//         alert("Please verify you are human first!");
//       }
//     });
//   });
// });
