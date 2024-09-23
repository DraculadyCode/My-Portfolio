// * Task 2
// & In script.js:
// ? Select the HTML element with the id mario and store it in a variable called mario
const mario = document.getElementById("mario");
// ? Select the HTML element <img /> and store it in a variable called imgMario
const imgMario = document.querySelector("img");
// ? Set src attribute of the <img /> to the value assets/mario-stand.gif
imgMario.src = "assets/mario-stand.gif";

// * Task 3
// & Create a function called stopMario;
function stopMario() {
  // ? The function should set the src attribute of the element imgMario to the value ./assets/mario-stand.gif
  imgMario.src = "assets/mario-stand.gif";
}

// * Task 4
// & Create a function moveMario;
function moveMario(event) {
  // ? It should check the src attribute of the element imgMario;
  if (!imgMario.src.includes("mario-walk.gif")) {
    // ^ if the src attribute matches mario-walk.gif, do nothing
    imgMario.src = "assets/mario-walk.gif";
  }

  // * Task 7
  // & We want Mario to turn in the direction he is walking. Update the function moveMario;
  if (event.key === "ArrowLeft") {
    // ^ Mario should be moved 10 pixels to the left
    mario.style.left = (parseInt(mario.style.left || 0) - 10) + "px";
    // ? When Mario wants to walk left, use the CSS property transform to rotate him to -180 degrees
    mario.style.transform = "rotateY(180deg)";
  }
  // ? If the event parameter property key matches ArrowRight;
  else if (event.key === "ArrowRight") {
    // ^ Mario should be moved 10 pixels to the right
    mario.style.left = (parseInt(mario.style.left || 0) + 10) + "px";
    // ? When Mario wants to walk right, use the CSS property transform to rotate him to 0 degrees
    mario.style.transform = "rotateY(0deg)";
  }
}

// * Task 5
// & Update the function moveMario;
// ? Create a keydown event listener on the document object
// ? The listener should execute the function moveMario
// ? moveMario should be updated so that the event object from the listener is available as a function parameter
document.addEventListener("keydown", moveMario);

// * Task 8
// & We want Mario to stop animating when the key is released.
// ? Create a keyup event listener on the document object
// ? The listener should execute the stopMario function
document.addEventListener("keyup", stopMario);