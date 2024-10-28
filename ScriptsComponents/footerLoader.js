// Determine the user's language preference
const language = "en"; // Change to 'de' for German

let footerFile = "";

// Set the footer file path based on the language
if (language === "de") {
  footerFile = "../PagesComponents/footer-de.html"; // Path to German footer
} else {
  footerFile = "../PagesComponents/footer-en.html"; // Path to English footer
}

// Define your base path
const basePath = window.location.origin + "/"; // Adjust if necessary

// Load the footer content
fetch(footerFile)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    // Replace {basePath} with the actual base path
    const footerContent = data.replace(/{basePath}/g, basePath);

    // Insert the footer content into the specified div
    document.getElementById("footer").innerHTML = footerContent;
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
