import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const myStyle = {
    color: "white",
    backgroundColor: "Black",
    border: "none",
    fontSize: "15px",
    border: "1px solid blue",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count + 1)} style={myStyle}>
        Increment
      </button>
      <button onClick={() => setCount(count + 1)} style={myStyle}>
        Decrement
      </button>
    </div>
  );
};
