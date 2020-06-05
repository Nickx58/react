import React, { useState } from "react";

const Counter = () => {
  let initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment By 5</button>
    </>
  );
};

export default Counter;
