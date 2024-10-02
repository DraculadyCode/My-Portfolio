import Square from "./Square";
import React, { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squaresCopy = squares.slice();
    if (squaresCopy[i] || calculateWinner(squaresCopy)) return;

    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }

    return null;
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
          ))}
      </div>
      <div className="board-row">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Square
              key={i + 3}
              value={squares[i + 3]}
              onClick={() => handleClick(i + 3)}
            />
          ))}
      </div>
      <div className="board-row">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Square
              key={i + 6}
              value={squares[i + 6]}
              onClick={() => handleClick(i + 6)}
            />
          ))}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>{" "}
      {/* Reset button */}
    </div>
  );
}

export default Board;
