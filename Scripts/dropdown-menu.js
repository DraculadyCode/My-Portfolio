document.querySelectorAll(".dropdown > a").forEach(function (link) {
  let timeout;

  // Handle touch for mobile devices
  let tappedOnce = false;
  link.addEventListener("touchstart", function (e) {
    const dropdown = link.nextElementSibling;

    if (tappedOnce) {
      // If already tapped once, follow the link
      return true;
    }
    if (dropdown && !tappedOnce) {
      e.preventDefault(); // Prevent following the link on first tap
      dropdown.style.display = "block"; // Set to block to push items down
      dropdown.style.opacity = "1"; // Set opacity to show dropdown
      dropdown.style.visibility = "visible"; // Ensure dropdown is visible
      dropdown.style.position = "relative"; // Set position to relatives
      tappedOnce = true;

      setTimeout(function () {
        tappedOnce = false; // Reset after 3 seconds
      }, 3000); // Allow tapping again after 3 seconds
    }
  });

  // Hide dropdown when clicked outside
  document.addEventListener("click", function (e) {
    if (
      !link.contains(e.target) &&
      !link.nextElementSibling.contains(e.target)
    ) {
      const dropdown = link.nextElementSibling;
      if (dropdown) {
        dropdown.style.display = "none"; // Hide dropdown
        dropdown.style.opacity = "0"; // Set opacity to hide dropdown
        dropdown.style.visibility = "hidden"; // Hide dropdown
        tappedOnce = false;
      }
    }
  });
});
