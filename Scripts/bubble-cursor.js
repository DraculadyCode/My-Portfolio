document.addEventListener("mousemove", function (e) {
  let circle = document.createElement("span");
  circle.classList.add("bubble"); // Add class to the span element
  let x = e.clientX; // Use clientX for mouse position relative to the viewport
  let y = e.clientY; // Use clientY for mouse position relative to the viewport
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * 40;
  circle.style.width = 10 + size + "px";
  circle.style.height = 10 + size + "px";

  // Append the circle to the body
  document.body.appendChild(circle);

  // Remove the circle after 1000ms
  setTimeout(function () {
    circle.remove();
  }, 1000);
});
