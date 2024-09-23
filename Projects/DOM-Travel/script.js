// Write your code here
// * Task 1 - Using JavaScript;
// & Select the <header> that is the closest parent of the <h1> heading
const heading = document.querySelector(".heading");
const header = heading.closest("header");
// & Give the <header> a grey solid border of 5px
header.style.border = "5px solid grey";

// * Task 2 - Write some JavaScript so that if the element with the class .info contains an element with the class .info-package;
const infoElements = document.querySelector(".info");
// & Select all elements with the class .package-title
const packageTitles = infoElements.querySelectorAll(".package-title");
// & Give the previous sibling element a border with the following value 2px solid #072F5F
packageTitles.forEach((title) => {
  const previousSiblingElement = title.previousElementSibling;
  previousSiblingElement.style.border = "2px solid #072F5F";
});

// * Task 3 - Write some JavaScript so that for the element with the class .info;
// & Select all <label> elements inside the element with the class .info
const labelElements = infoElements.querySelectorAll("label");
// & For each <label> element, check the classname;
labelElements.forEach((label) => {
  // ? if it matches mild, give the element a yellow solid border
  if (label.classList.contains("mild")) {
    label.style.border = "2px solid yellow";
  }
  // ? if it matches intense, give the element an orange solid border
  else if (label.classList.contains("intense")) {
    label.style.border = "2px solid orange";
  }
  // ? if it maches neither, give it a red solid border
  else {
    label.style.border = "2px solid red";
  }
});

// * Task 4 - Using JavaScript;
// & Copy the children of ul.nav-list element to the ul.site-map element
const navList = document.querySelector("ul.nav-list");
const siteMap = document.querySelector("ul.site-map");
siteMap.innerHTML = navList.innerHTML;
// document.body.footer.siteMap = document.body.footer.navList;
// ~ https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
