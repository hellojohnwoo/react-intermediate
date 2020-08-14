import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hi!");
  const onClickLeave = () => setMessage("bye bye!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Exit</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red-Color
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green-Color
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blue-Color
      </button>
    </div>
  );
};

export default Say;
