import React, { useState } from "react";
import "../App.css";

function Scorboard() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>Score Board</h1>
      <div className="content">
        <p>You Current Score is {score}</p>
        <div className="buttons">
          <button onClick={() => setScore(score + 10)}>
            <span>+</span>
          </button>
          <button onClick={() => setScore(score - 10)}>
            <span>-</span>
          </button>
        </div>
        <p>{score > 100 ? "Good Job!" : "Let's make it over 100!"}</p>
      </div>
    </div>
  );
}

export default Scorboard;
