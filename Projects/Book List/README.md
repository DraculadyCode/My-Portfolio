# The Book List

Create a dynamically generated book website! Instead of adding the books directly into the HTML, we will dynamically generate the HTML based on an array of JavaScript objects, and add our CSS classes with the **classList API**.

## Task

The file [js/main.js](js/main.js) contains the variable `books` - an array of JavaScript objects - each object represents a book.

- Build a single page responsive website which lists the books in the `books` variable. Write some JavaScript to loop through the array and generate the HTML for your book list.

- You can write your JavaScript code directly in [js/main.js](js/main.js)

- You **do not need** to write any HTML or CSS for this task (they have already been prepared for you)

- See the reference images below to get an idea for the final result

## Requirements

- Using JavaScript, select the `<ul>` HTML element with the class `book-list`
- For each book, you will need to create a `<li>` element and append (add) it to the `<ul>`
- Each `<li>` element should have the class `book`
- Each `<li>` element should have 3 child elements to hold the book data;
  - `<img />` with the class `book-img` for the image
  - `<h2>` with the class `book-title` for the title
  - `<p>` with the class `book-author` for the author
- The list of books must be sorted by comparing the names of the authors, from A➡Z

## Hints

- 💫 Here the array method [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) really shines. It should sit at the heart of your application. Use it to loop through the book array and generate the HTML for your book list.

- You can use the array method [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to sort an array

## Reference Image

![Reference](./reference.png)
