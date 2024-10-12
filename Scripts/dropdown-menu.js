document.querySelectorAll(".dropdown > a").forEach((link) => {
  let tappedOnce = false;
  let timeout;

  link.addEventListener("click", function (e) {
    const submenu = this.nextElementSibling;

    if (!tappedOnce && submenu) {
      // Prevent default action (following the link)
      e.preventDefault();

      // Clear any existing timeout
      clearTimeout(timeout);

      // Show the dropdown menu
      submenu.classList.add("stay-open");
      tappedOnce = true;

      // After 3 seconds, hide the menu and reset the tap state
      timeout = setTimeout(() => {
        submenu.classList.remove("stay-open");
        tappedOnce = false;
      }, 3000); // Keep the menu open for 3 seconds
    } else if (tappedOnce) {
      // Allow navigation on the second tap
      window.location.href = this.getAttribute("href");
    }
  });
});
