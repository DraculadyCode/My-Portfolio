// Function to handle redirection based on resolution and current page
function handleResolutionRedirect() {
  const currentUrl = window.location.href;

  if (window.innerWidth <= 1150) {
    // Redirect to the mobile versions if on a smaller screen
    if (currentUrl.includes("resume-english.html")) {
      window.location.href = "../Pages/resumeMobile-english.html";
    } else if (currentUrl.includes("resume-german.html")) {
      window.location.href = "../Pages/resumeMobile-german.html";
    } else if (currentUrl.includes("timeline-english.html")) {
      window.location.href = "../Pages/resumeMobile-english.html";
    } else if (currentUrl.includes("timeline-german.html")) {
      window.location.href = "../Pages/resumeMobile-german.html";
    }
    // } else if (window.innerWidth > 1150) {
    //   // Redirect back to the desktop versions if on a larger screen
    //   if (currentUrl.includes("resumeMobile-english.html")) {
    //     window.location.href = "../Pages/timeline-english.html";
    //   } else if (currentUrl.includes("resumeMobile-german.html")) {
    //     window.location.href = "../Pages/timeline-german.html";
    //   }
    // }
  }
}
// Run the redirect check when the page loads
handleResolutionRedirect();

// Attach the function to the resize event
window.addEventListener("resize", handleResolutionRedirect);
