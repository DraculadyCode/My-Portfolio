// * Task 1
// ? Create a function called processData
const button = document.querySelector("button");
// ? When the <button> is clicked, it should run processData
button.addEventListener("click", () => processData());

// * Task - ProcessData function
function processData() {
  // ? Fetch the contents of the file data.txt
  fetch("data.txt")
    .then((response) => response.text())
    .then((data) => {
      // ? Convert the fetched text data into an array, with each line of the text as a separate array item
      const sortedArray = data.split("\n");
      const sortedArrayWithoutDuplicates = [];
      // ? Sort the array alphabetically
      // ? Remove duplicates
      sortedArray.forEach((word) => {
        if (!sortedArrayWithoutDuplicates.includes(word)) {
          sortedArrayWithoutDuplicates.push(word);
        }
      });
      sortedArrayWithoutDuplicates.sort();
      // ? Display the sorted array as a <ul> list on the web page, with each array item as an <li> element
      const ul = document.createElement("ul");
      sortedArrayWithoutDuplicates.forEach((word) => {
        const li = document.createElement("li");
        li.textContent = word;
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    })
    .catch((error) =>
      console.error("Error occurred during the fetch operation.")
    );
}
// const processData = (file) = > {
// const listOfData = [];

// fetch("data.txt")
// .then((response))
// }
