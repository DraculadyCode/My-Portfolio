# Redirecting on 404

With this exercise we will simulate another use case for redirecting the user, using the `<Navigate />` react-router-dom component.

## Tasks

> 🧸 Examine the existing files and familiarize yourself with the codebase before starting!

### Task 1

In the [components](./src/components/) folder;

- Create a new component, `404.jsx`
- The page must include the following information;
  - A header with the text `"404"`
  - A paragraph with the text `"Sorry, this page doesn't exist! Redirecting you to the homepage..."`
- Using `useEffect`, `setTimeout` and the `useNavigate` component from react-router-dom, make the page redirect to the `Home` page after 3 seconds

### Task 2

Update the routing in the [App.jsx](./src/App.jsx) file, so that;

- When the user tries to access a page that doesn't exist, they will be redirected to the `404` page
- You will need to setup a route with a [catchall](https://reactrouter.com/en/main/route/route#splats)
- You will need to use the `<Navigate />` component from react-router-dom
