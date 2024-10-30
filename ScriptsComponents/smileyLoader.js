console.log("smileyLoader.js is loaded");

function loadSmiley() {
  console.log("Executing loadSmiley");

  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/Pages/");
  let lang = document.documentElement.lang === "de" ? "de" : "en";
  const smileyFile =
    lang === "de"
      ? "../PagesComponents/smiley-de.html"
      : "../PagesComponents/smiley-en.html";

  console.log(`Loading smiley from: ${smileyFile}`);

  fetch(smileyFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      console.log("Smiley HTML loaded successfully");
      document.getElementById("smiley").innerHTML = data;

      const basePath = isInPagesFolder ? "../" : "./";
      const contactLink =
        lang === "de"
          ? `${basePath}Pages/contact-german.html#contact`
          : `${basePath}Pages/contact-english.html#contact`;

      const contactAnchor = document.getElementById("contactLink");
      if (contactAnchor) {
        contactAnchor.href = contactLink;
      } else {
        console.warn("contactLink element not found in loaded HTML.");
      }
    })
    .catch((error) => console.error("Error loading smiley:", error));
}

// Use DOMContentLoaded for triggering the function
document.addEventListener("DOMContentLoaded", loadSmiley);
