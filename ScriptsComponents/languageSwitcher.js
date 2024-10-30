function createLanguageSwitcher() {
  const switcherDiv = document.getElementById("language-switcher");

  // Get the data-page attribute from the html element
  const dataPage = document.documentElement.getAttribute("data-page");

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

  // Construct the language switcher link based on the current language
  if (language === "german") {
    // If current language is German
    if (pageName === "index") {
      // Handle the index page case
      languageButton = `
        <a href="./index.html" aria-label="Change Language to English">
          <img
            src="../Language Logos/English_Logo.webp"
            loading="lazy"
            alt="Change Language to English"
          />
        </a>`;
    } else {
      // For other pages, follow the standard pattern
      languageButton = `
        <a href="./${
          pageName.split("-")[0]
        }-english.html" aria-label="Change Language to English">
          <img
            src="../Language Logos/English_Logo.webp"
            loading="lazy"
            alt="Change Language to English"
          />
        </a>`;
    }
  } else if (language === "english") {
    // If current language is English
    if (pageName === "index") {
      // Handle the index page case
      languageButton = `
        <a href="./index-german.html" aria-label="Change Language to German">
          <img
            src="../Language Logos/German_Logo.webp"
            loading="lazy"
            alt="Change Language to German"
          />
        </a>`;
    } else {
      // For other pages, follow the standard pattern
      languageButton = `
        <a href="./${
          pageName.split("-")[0]
        }-german.html" aria-label="Change Language to German">
          <img
            src="../Language Logos/German_Logo.webp"
            loading="lazy"
            alt="Change Language to German"
          />
        </a>`;
    }
  } else {
    languageButton = "<p>Language switcher not available on this page.</p>";
  }

  // Insert the language button into the switcher div
  switcherDiv.innerHTML = languageButton;
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", createLanguageSwitcher);
