// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the reCAPTCHA response
    const recaptchaResponse = document.querySelector('.g-recaptcha');
  
    // Get all download links initially disabled
    const downloadLinks = document.querySelectorAll('.disabled-link');
  
    // Function to enable download links once the CAPTCHA is validated
    function enableDownloads() {
      if (grecaptcha.getResponse()) {
        downloadLinks.forEach((link) => {
          link.classList.remove('disabled-link');
          link.addEventListener('click', () => {
            alert('Thank you for verifying! :)');
          });
        });
      } else {
        alert('Please verify that you are a human! ;)');
      }
    }
  
    // Add event listener to reCAPTCHA to check when it's successfully verified
    grecaptcha.render(recaptchaResponse, {
      callback: enableDownloads,
    });
  });
  