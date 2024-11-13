function onCaptchaSuccess() {
  const links = document.querySelectorAll("a, button");
  links.forEach((link) => {
    link.classList.remove("disabled");
  });
}

// Disable links and buttons by default
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a, button");
  links.forEach((link) => {
    link.classList.add("disabled");
    link.addEventListener("click", (e) => {
      if (link.classList.contains("disabled")) {
        e.preventDefault();
        alert("Please verify you are human first!");
      }
    });
  });
});
