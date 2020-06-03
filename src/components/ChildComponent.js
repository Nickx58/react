import React from "react";

function ChildComponent({ greetHandler }) {
  return (
    <div>
      <button onClick={() => greetHandler("from child")}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
