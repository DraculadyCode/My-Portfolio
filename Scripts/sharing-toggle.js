let toggle = document.querySelector(".sharing-toggle");
let menu = document.querySelector(".sharing-menu");
toggle.onclick = function () {
  menu.classList.toggle("active");
};

// * Sharing links:
const shareLinks = document.querySelectorAll(".share-link");
const currentUrl = window.location.href; // Get the current page URL

// Update each share link with the current URL
shareLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action

    let platform = link.getAttribute("data-platform");
    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=Check this out!`;
        break;
      case "telegram":
        shareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
          currentUrl
        )}&media=YOUR_IMAGE_URL&description=YOUR_DESCRIPTION`;
        break;
      default:
        return; // Do nothing if the platform is not recognized
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer"); // Open the share link in a new tab
  });
});
