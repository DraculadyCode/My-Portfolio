// Function to handle redirection based on resolution and current page
function handleResolutionRedirect() {
  const currentUrl = window.location.href;
  console.log("Current URL:", currentUrl); // Log current URL
  console.log("Window Width:", window.innerWidth); // Log window width

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (window.innerWidth <= 1150 || isTouchDevice) {
    if (currentUrl.includes("resume-english.html")) {
      console.log("Redirecting to mobile English resume");
      window.location.href = "../Pages/resumeMobile-english.html";
    } else if (currentUrl.includes("resume-german.html")) {
      console.log("Redirecting to mobile German resume");
      window.location.href = "../Pages/resumeMobile-german.html";
    } else if (currentUrl.includes("timeline-english.html")) {
      console.log("Redirecting to mobile English timeline");
      window.location.href = "../Pages/resumeMobile-english.html";
    } else if (currentUrl.includes("timeline-german.html")) {
      console.log("Redirecting to mobile German timeline");
      window.location.href = "../Pages/resumeMobile-german.html";
    }
  }
}

// Run the redirect check when the page loads
window.addEventListener("load", handleResolutionRedirect);

// Attach the function to the resize event
window.addEventListener("resize", handleResolutionRedirect);
