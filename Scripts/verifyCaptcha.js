document.addEventListener("DOMContentLoaded", function () {
  // Get the reCAPTCHA response
  const recaptchaResponse = document.querySelector(".g-recaptcha");

  // Get all download links initially disabled
  const downloadLinks = document.querySelectorAll(".disabled-link");

  // Function to enable download links once the CAPTCHA is validated
  function enableDownloads() {
    if (grecaptcha.getResponse()) {
      // Remove the 'disabled-link' class and enable the download
      downloadLinks.forEach((link) => {
        link.classList.remove("disabled-link");
        link.addEventListener("click", (event) => {
          alert("Thank you for verifying! :)");
        });
      });
    } else {
      alert("Please verify that you are a human! ;)");
    }
  }

  // Function to check if the download link is disabled and prevent download
  function preventDownload(event) {
    if (event.target.classList.contains("disabled-link")) {
      event.preventDefault(); // Prevent the download from starting
      alert("Please verify that you are a human! ;)");
    }
  }

  // Add event listener to each download link to prevent download if disabled
  downloadLinks.forEach((link) => {
    link.addEventListener("click", preventDownload);
  });

  // Add event listener to reCAPTCHA to check when it's successfully verified
  grecaptcha.render(recaptchaResponse, {
    callback: enableDownloads
  });
});
