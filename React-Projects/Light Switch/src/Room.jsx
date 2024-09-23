import React, { useState } from "react";

function Room() {
  const [LightIsOn, TurnOnLight] = useState(true);

  return (
    <div className={LightIsOn ? "lit" : "dark"}>
      <button onClick={() => TurnOnLight((prev) => !prev)}>Light Switch</button>
      <p>{`The room is ${LightIsOn ? "lit" : "dark"}`}</p>
    </div>
  );
}
export default Room;
