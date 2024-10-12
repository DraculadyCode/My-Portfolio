document.querySelectorAll(".dropdown > a").forEach(function (link) {
  let timeout;

  // Handle hover for non-touch devices
  link.addEventListener("mouseover", function (e) {
    e.preventDefault();
    const dropdown = link.nextElementSibling; // Get the corresponding dropdown
    if (dropdown) {
      dropdown.classList.add("show"); // Add class to show dropdown
      clearTimeout(timeout); // Clear any existing timeout
    }
  });

  link.addEventListener("mouseout", function () {
    const dropdown = link.nextElementSibling;
    if (dropdown) {
      timeout = setTimeout(function () {
        dropdown.classList.remove("show"); // Remove class to hide dropdown after 3 seconds
      }, 3000);
    }
  });

  // Handle touch for mobile devices
  let tappedOnce = false;
  link.addEventListener("touchstart", function (e) {
    const dropdown = link.nextElementSibling;

    if (tappedOnce) {
      // If already tapped once, allow the default action
      return true;
    }

    if (dropdown) {
      e.preventDefault(); // Prevent following the link on first tap
      dropdown.classList.add("show"); // Show dropdown
      tappedOnce = true;

      // Hide dropdown after 3 seconds
      timeout = setTimeout(function () {
        dropdown.classList.remove("show"); // Hide dropdown
        tappedOnce = false; // Allow tapping again after 3 seconds
      }, 3000);
    }
  });

  // Hide dropdown when clicked outside
  document.addEventListener("click", function (e) {
    const dropdown = link.nextElementSibling;
    if (!link.contains(e.target) && dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show"); // Hide dropdown
      tappedOnce = false; // Allow tapping again
      clearTimeout(timeout); // Clear any existing timeout
    }
  });
});
