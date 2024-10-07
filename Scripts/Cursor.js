// Select the custom cursor element
const cursor = document.querySelector(".custom-cursor");

// Update cursor position on mouse move
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Increase cursor size on click
document.addEventListener("click", () => {
  // Increase the cursor size
  cursor.style.width = "6rem"; // Change size to 8rem
  cursor.style.height = "6rem"; // Change height to 8rem

  // Reset size back to original after a short delay
  setTimeout(() => {
    cursor.style.width = "3rem"; // Change size back to 4rem
    cursor.style.height = "3rem"; // Change height back to 4rem
  }, 5000); // Adjust the duration as needed (200 milliseconds)
});
// Change z-index when hovering over links
document.querySelectorAll("a, img, i").forEach((link) => {
  // When the mouse enters the link
  link.addEventListener("mouseenter", () => {
    cursor.style.zIndex = "-1"; // Set z-index to -1
  });

  // When the mouse leaves the link
  link.addEventListener("mouseleave", () => {
    cursor.style.zIndex = "100"; // Reset z-index back to normal
  });
});
