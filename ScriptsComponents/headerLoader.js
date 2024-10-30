// headerLoader.js
console.log("headerLoader.js is loaded");

function loadHeader() {
  console.log("Executing loadHeader");

  // Determine the current language from the <html> lang attribute
  const lang = document.documentElement.lang === "de" ? "de" : "en";
  const headerFile =
    lang === "de"
      ? "../PagesComponents/header-de.html"
      : "../PagesComponents/header-en.html";

  console.log(`Loading header from: ${headerFile}`);

  // Load the header HTML
  fetch(headerFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      console.log("Header HTML loaded successfully");
      document.getElementById("header").innerHTML = data; // Ensure this element exists in your HTML

      // Determine if the current page is inside the "Pages" folder
      const currentPath = window.location.pathname;
      const isInPagesFolder = currentPath.includes("/Pages/");

      // Adjust the links based on the page location
      const links = document.querySelectorAll("nav a"); // Select all anchor links in the navigation
      links.forEach((link) => {
        const originalHref = link.getAttribute("href");

        if (isInPagesFolder) {
          // If in the "Pages" folder, adjust links to point to the root
          if (originalHref.startsWith("./")) {
            link.setAttribute("href", originalHref.replace("./", "../")); // Move up one folder
          } else if (!originalHref.startsWith("http")) {
            link.setAttribute("href", "../" + originalHref); // Prepend '../' for other links
          }
        } else {
          // If not in the "Pages" folder, ensure links are correct for root
          if (originalHref.startsWith("../")) {
            link.setAttribute("href", originalHref.replace("../", "./")); // Point to the current folder
          }
        }
      });

      // Adjust image paths
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        const originalSrc = img.getAttribute("src");

        if (isInPagesFolder) {
          if (originalSrc.startsWith("./")) {
            img.setAttribute("src", originalSrc.replace("./", "../")); // Move up one folder
          } else if (!originalSrc.startsWith("http")) {
            img.setAttribute("src", "../" + originalSrc); // Prepend '../' for other links
          }
        } else {
          if (originalSrc.startsWith("../")) {
            img.setAttribute("src", originalSrc.replace("../", "./")); // Point to the current folder
          }
        }
      });
    })
    .catch((error) => console.error("Error loading header:", error));
}

// Use DOMContentLoaded to call the loadHeader function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadHeader);
