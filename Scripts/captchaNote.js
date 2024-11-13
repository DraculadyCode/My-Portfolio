function onCaptchaSuccess() {
  // Hide the sticky note after successful CAPTCHA verification
  const stickyNote = document.getElementById("sticky-note");
  if (stickyNote) {
    stickyNote.style.opacity = "0"; // Fade out the sticky note
    setTimeout(() => {
      stickyNote.style.display = "none"; // Completely hide the sticky note after fading
    }, 300); // Matches the CSS fade-out duration
  }

  // Enable all links and buttons after CAPTCHA is completed
  const linksAndButtons = document.querySelectorAll("a, button");
  linksAndButtons.forEach((element) => {
    element.classList.remove("disabled"); // Remove the 'disabled' class
    element.style.cursor = "pointer"; // Change cursor to pointer
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


