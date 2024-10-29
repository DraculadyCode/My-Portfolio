// footerLoader.js
function loadFooter() {
  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/Pages/");
  // Choose the footer file based on the language
  let lang = document.documentElement.lang === "de" ? "de" : "en";
  const footerFile =
    lang === "de"
      ? "../PagesComponents/footer-de.html"
      : "../PagesComponents/footer-en.html";

  // Load the footer HTML
  fetch(footerFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;

      // Set the correct base path for the image and sitemap link
      const basePath = isInPagesFolder ? "../" : "./"; // Adjust base path depending on the folder
      const sitemapLink = `${basePath}Pages/sitemap.html`;
      const logoImg = `${basePath}Icons/Draculady-logo.webp`;

      // Update sitemap link and image source
      const sitemapAnchor = document.getElementById("sitemap-link"); // Ensure this anchor exists in the loaded footer
      if (sitemapAnchor) {
        sitemapAnchor.href = sitemapLink;
      }

      const logoImage = document.querySelector("#footer .logo img"); // Ensure this image exists in the loaded footer
      if (logoImage) {
        logoImage.src = logoImg;
      }
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call the loadFooter function when the page loads
window.onload = loadFooter;
