import React, { useState, useEffect } from "react";

function HooksEffect() {
  const [count, seCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => seCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HooksEffect;
