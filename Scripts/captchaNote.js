function onCaptchaSuccess() {
  // Hide the sticky note after successful CAPTCHA verification
  const stickyNote = document.getElementById("sticky-note");
  if (stickyNote) {
    stickyNote.style.opacity = "0"; // Fade out the sticky note
    setTimeout(() => {
      stickyNote.style.display = "none"; // Completely hide the sticky note after fading
    }, 300); // Matches the CSS fade-out duration
  }
}

// You can add an event listener to handle the visibility of the sticky note (optional)
document.addEventListener("DOMContentLoaded", function () {
  const stickyNote = document.getElementById("sticky-note");
  // Initial check: Show the sticky note only if CAPTCHA is not verified
  if (stickyNote) {
    stickyNote.style.opacity = "1"; // Make sure it's visible
  }
});
