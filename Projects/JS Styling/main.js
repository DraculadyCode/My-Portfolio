// * Task 1
document.body.style.fontFamily = "Arial";
document.querySelector("h1").style.textAlign = "center";

// * Task 2
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
  category.style.fontStyle = "italic";
  category.style.fontSize = "2rem";
  category.style.borderBottom = "1px solid black";
});

// * Task 3
const main = document.querySelector(".main");
main.style.display = "flex";
main.style.flexFlow = "row wrap";
main.style.justifyContent = "space-around";
main.style.borderSizing = "border-box";

// * Task 4
const foodItem = document.querySelectorAll(".food-item");
foodItem.forEach((item) => {
  item.style.marginTop = "1rem";
  item.style.listStyleType = "none";
});

// * Task 5
const menuCategory = document.querySelectorAll(".menu-category");
menuCategory.forEach((category) => {
  category.style.minWidth = "300px";
  category.style.height = "10rem";
  category.style.textAlign = "center";
  category.style.padding = "1rem";
  category.style.borderRadius = "5px";
});

// * Task 6
function colorGenerator() {
  return Math.floor(Math.random() * 256);
}
menuCategory.forEach((category) => {
  const color1 = colorGenerator();
  const color2 = colorGenerator();
  const color3 = colorGenerator();
  category.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
});
