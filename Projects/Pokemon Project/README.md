# Pokemon Cards

Create a pokemon search engine using the Fetch API and the Pokemon API.

## Task

Using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and the [Pokemon API](https://pokeapi.co/);

- Build a website that allows the user to search for Pokemon. The user should be able to interact with the page using an `<input />` field and a `<button>`.

## Requirements

- There should be an `<input />` field for the search criteria
- There should be a button which on `click`, uses the `value` of the `<input />` field to;

  - Check the `value` is not empty
  - If `value` is empty, display a warning to the user
  - Search the [Pokemon API](https://pokeapi.co/)
  - Display the result from the API on the page
  - The result should include the following properties;
    - name
    - front_default (image)
    - stats
    - abilities

- The results should be styled to look like a card (see **Expected Result** below)

## Expected Result

![Expected result](./reference.gif)
