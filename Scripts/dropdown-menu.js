document.querySelectorAll(".dropdown > a").forEach(function (link) {
  // Check if device is touch-enabled
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  link.addEventListener("touchstart", function (e) {
    const dropdown = link.nextElementSibling;

    // Toggle visibility on touch devices only
    if (isTouchDevice) {
      e.preventDefault(); // Prevent following the link
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
      dropdown.style.opacity = dropdown.style.display === "block" ? "1" : "0";
      dropdown.style.visibility =
        dropdown.style.display === "block" ? "visible" : "hidden";

      // Close other dropdowns if multiple are open
      document.querySelectorAll(".dropdown > ul").forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.style.display = "none";
          otherDropdown.style.opacity = "0";
          otherDropdown.style.visibility = "hidden";
        }
      });
    }
  });

  // Event listener to close the dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !link.contains(e.target) &&
      !link.nextElementSibling.contains(e.target)
    ) {
      const dropdown = link.nextElementSibling;
      dropdown.style.display = "none";
      dropdown.style.opacity = "0";
      dropdown.style.visibility = "hidden";
    }
  });
});
