# Create a simple Scoreboard using Context API

In this exercise, we will practice how to manage global state by using the react hook `useContext`. See the reference image below.

![Score board](example.gif)

## Tasks

### Task 1

Create a new react app;

- Run `npx create-react-app scoreboard` in the terminal
- Start the server with `npm start`
- Inside the `src` folder, create a new folder called `Components`

### Task 2

- Create the component `Scoreboard` inside the `Components` folder
- Add some content like in the image above
- Add two buttons (+, -)
- Import the `Scoreboard` component in `App.js`

### Task 3

Inside the `src` folder

- Create a new folder called `Contexts`
- Add `ScoreContext.js` to the `Contexts` folder

> Note that we initialize the context in a separate file, as we will use it across the entire app

### Task 4

In `ScoreContext.js`

- Import `useState` and `createContext` from react
- Create and export a context called `ScoreContext`
- Create a context provider called `ScoreContextProvider`

### Task 5

- Inside the `ScoreContextProvider`, declare a state variable called `score` with an initial value of `0`, and
- Write two functions:
  - `plusScore(): score + 10`
  - `minusScore(): score - 10`
- Use the `value` prop to make these three variables (`score`, `plusScore`, `minusScore`) accessible to all child components

### Task 6

In `App.js`;

- Import the `ScoreContextProvider` component
- To make the context accessible to the child components, wrap the `App` component with the `ScoreContextProvider` component

### Task 7

In `Scoreboard.js`;

- Import `useContext` from react.
- Import `ScoreContext` from the `Contexts` folder
- Access the value passed down from the context. Use the value `score` from the context for the `h2` text
- Connect the functions `plusScore`, `minusScore` to the click events of the buttons

### Task 8

- Inside the `Components` folder, create the component `Infoboard`
- Add a `h3` element with the text **"Let's make it over 100!"**
- The content should change to **"Good job!"** once the score is over `100`. Utilize `score` from the context.
