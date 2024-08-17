# Styling with JavaScript

We've seen that we can apply CSS styles using stylesheets, but we can also apply CSS styles dynamically to our page using JavaScript.

## Tasks

We've created an HTML menu for you in the [index.html](/index.html) file.

Using only JavaScript, use the [main.js](/main.js) file to style the menu. Don't edit any of the other files at all.

> 👿 **Do not** change the HTML

> 🍤 **Do not** use CSS stylesheets

### Task 1

- Change the `fontFamily` of the `<body>` element to `Arial`
- Center the `<h1>` element by setting the `textAlign` property to `center`

### Task 2

The menu headings have the class `.category`.

- Select all elements with the class `.category`
- Change the style of these elements, to have the following CSS properties;
  - fontStyle: `italic`
  - fontSize: `2rem`
  - borderBottom: `1px solid black`

### Task 3

- Select the element with the class `.main`
- Change the style of these elements, to have the following CSS properties;
  - display: `flex`
  - flexFlow: `row wrap`
  - justifyContent: `space-around`
  - boxSizing: `border-box`

### Task 4

- Select all elements with the class `.food-item`
- Set a top margin of `1rem`
- Set the list style type to `none`

### Task 5

- Select all elements with the class `.menu-category`
- Change the style of these elements, to have the following CSS properties;
  - minWidth: `300px`
  - height: `10rem`
  - textAlign: `center`
  - padding: `1rem`
  - borderRadius: `5px`

### Task 6

- Create a function named `colorGenerator` that returns a random number from 0 - 255
- You will need 3 of these values (for red, green and blue) to generate a color
- Select the unordered lists with the class `.menu-category`
- Give each list a different background color using the `colorGenerator` function that you created

> Hint: You can use the CSS property, `rbg()` which accepts 3 integers from 0 - 255
>
> - Example: `rgb(200, 100, 40)`

## Reference Image

When you refresh the page, new colors should be randomly generated

![Reference image](reference.png)

