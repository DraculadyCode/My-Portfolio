import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Square from "./components/Square";

function App() {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
