import React, { useEffect, useState } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Mouse Over");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Un--Mounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <p>Mouse at x: {x}</p>
      <p>Mouse at x: {y}</p>
    </div>
  );
}

export default HooksMouse;
