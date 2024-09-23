// Initialize variables
let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("color-display");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

// Setup event listeners
resetButton.addEventListener("click", reset);
modeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    modeButtons.forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");
    numSquares = this.textContent === "Easy" ? 3 : 6;
    reset();
  });
});

// Initialize the game
init();

function init() {
  setupSquares();
  reset();
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT";
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "TRY AGAIN";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
