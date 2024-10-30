// languageSwitcher.js
function createLanguageSwitcher() {
  const switcherDiv = document.getElementById("language-switcher");

  // Get the data-page attribute from the body or html element
  const dataPage = document.documentElement.getAttribute("data-page");
  const lang = document.documentElement.getAttribute("lang");
  // Check if dataPage is defined
  if (!dataPage) {
    console.error("data-page attribute not found.");
    switcherDiv.innerHTML =
      "<p>Language switcher not available on this page.</p>";
    return; // Exit if data-page is not defined
  }

  // Split the data-page attribute into an array
  const [pageName, language] = dataPage.split(" "); // [first word, second word]

  let languageButton = "";

  if (language === "english") {
    // If the page is in English, provide a link to the German version
    languageButton = `
            <a href="../${pageName}-german.html" aria-label="Change Language to German">
                <img
                    src="../Language Logos/German_Logo.webp"
                    loading="lazy"
                    alt="Change Language to German"
                />
            </a>`;
  } else if (language === "german") {
    // If the page is in German, provide a link to the English version
    languageButton = `
            <a href="../${pageName}-english.html" aria-label="Change Language to English">
                <img
                    src="../Language Logos/English_Logo.webp"
                    loading="lazy"
                    alt="Change Language to English"
                />
            </a>`;
  } else {
    // Default case, if the language is not recognized
    languageButton = "<p>Language switcher not available on this page.</p>";
  }

  // Insert the language button into the switcher div
  switcherDiv.innerHTML = languageButton;
}

// Call the function on page load
// window.onload = createLanguageSwitcher;
// Use DOMContentLoaded for triggering the function
document.addEventListener("DOMContentLoaded", createLanguageSwitcher);
