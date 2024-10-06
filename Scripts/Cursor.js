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
  cursor.style.width = "6rem"; // Change size to 6rem
  cursor.style.height = "6rem"; // Change height to 6rem

  // Reset size back to original after a short delay
  setTimeout(() => {
    cursor.style.width = "4rem"; // Change size back to 4rem
    cursor.style.height = "4rem"; // Change height back to 4rem
  }, 5000); // Adjust the duration as needed (200 milliseconds)
});
