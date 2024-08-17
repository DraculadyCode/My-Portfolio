const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Norman, Don",
    img: "images/camp-7103189_640.webp"
  },
  {
    title: "The Most Human Human",
    author: "Christian, Brian",
    img: "images/cupcakes-2887270_640.webp"
  },
  {
    title: "Thinking with Type",
    author: "Lupton, Ellen",
    img: "images/manufacturing-35087_640.webp"
  },
  {
    title: "Eloquent JavaScript",
    author: "Haverbeke, Marijn",
    img: "images/snake-eagle-6591348_640.webp"
  }
];

// Select the <ul> element with the class 'book-list'
const bookList = document.querySelector(".book-list");

// Sort the books array by author's name
books.sort((a, b) => a.author.localeCompare(b.author));

// Loop through the books array and generate HTML
books.forEach((book) => {
  // Create <li> element with class 'book'
  const li = document.createElement("li");
  li.classList.add("book");

  // Create <img> element with class 'book-img'
  const img = document.createElement("img");
  img.classList.add("book-img");
  img.src = book.img;

  // Create <h2> element with class 'book-title'
  const h2 = document.createElement("h2");
  h2.classList.add("book-title");
  h2.textContent = book.title;

  // Create <p> element with class 'book-author'
  const p = document.createElement("p");
  p.classList.add("book-author");
  p.textContent = book.author;

  // Append img, h2, and p to li
  li.appendChild(img);
  li.appendChild(h2);
  li.appendChild(p);

  // Append li to bookList
  bookList.appendChild(li);
});
