document.addEventListener("DOMContentLoaded", function () {
    // Select the container element where the share component will be inserted
    const shareContainer = document.getElementById("share-container");
    
    // Check if the container exists on the page
    if (shareContainer) {
      // Load the share component from its relative path
      fetch("../PagesComponents/shareButton.html") // Adjust path according to your structure
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not load share component.");
          }
          return response.text();
        })
        .then((data) => {
          shareContainer.innerHTML = data;
        })
        .catch((error) => {
          console.error("Error loading share component:", error);
        });
    }
  });
  