if (window.innerWidth <= 1150) {
  // Get the current URL to determine which language version is being viewed
  const currentUrl = window.location.href;

  if (currentUrl.includes("resume-english.html")) {
    // If the user is viewing the English resume, redirect to the English mobile resume
    window.location.href = "../Pages/resume-mobile-english.html";
  } else if (currentUrl.includes("resume-german.html")) {
    // If the user is viewing the German resume, redirect to the German mobile resume
    window.location.href = "../Pages/resume-mobile-german.html";
  }
}
