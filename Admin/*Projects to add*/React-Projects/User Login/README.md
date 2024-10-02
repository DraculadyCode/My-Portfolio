# Login with input focus

This exercise is about practicing the usage of `useRef` and about reading code in an existing project.

This project already has most of it's code completed, your tasks relate to adding missing features. There are multiple ways to solve the requirements, but in this case use at least `useRef`. You can use other hooks as well.

## Task

## Requirements

- Read the code and test the application
- Your objective is to improve the user experience
- If the credentials are wrong, an error is displayed
- Your tasks:
    - Only edit `Login.jsx`
    - Improve the users experience after clicking the login button
    - If the error is related to username, `focus` the username input
    - If the error is related to password, `focus` the password input

- The above improvements should also work if the user only uses the keyboard
    - Reminder: you can switch between focused elements using `tab`
    - You can press enter when focused on the Login button to activate it

- **Optional bonus task** Add a toggle checkbox that allows the user to view their password in plain text. If they click the button, focus the password field.

## Hints

- To focus you need the DOM element and call `element.focus()`
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
