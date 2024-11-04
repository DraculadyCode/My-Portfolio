document.addEventListener("DOMContentLoaded", function () {
  const shareContainer = document.getElementById("share-container");

  if (shareContainer) {
    fetch("../PagesComponents/shareButton.html")
      .then((response) => response.text())
      .then((data) => {
        shareContainer.innerHTML = data || "No content loaded";

        // Find the toggle button and menu inside the loaded content
        const sharingToggle = shareContainer.querySelector(".sharing-toggle");
        const sharingMenu = shareContainer.querySelector(".sharing-menu");

        if (sharingToggle && sharingMenu) {
          sharingToggle.addEventListener("click", function () {
            sharingMenu.classList.toggle("active");
          });
        }
      })
      .catch((error) => console.error("Error loading share component:", error));
  }
});
