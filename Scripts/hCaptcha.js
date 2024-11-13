function onCaptchaSuccess() {
  // Enable all links and buttons after successful CAPTCHA
  const links = document.querySelectorAll("a, button");
  links.forEach((link) => {
    link.classList.remove("disabled");
  });
}

// Disable links and buttons by default, except for the language switcher
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a, button");
  links.forEach((link) => {
    // Skip disabling if the link is part of the language switcher
    if (link.closest("#language-switcher")) return;

    // Disable other links and buttons
    link.classList.add("disabled");
    link.addEventListener("click", (e) => {
      if (link.classList.contains("disabled")) {
        e.preventDefault();
        alert("Please verify you are human first!");
      }
    });
  });
});

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
