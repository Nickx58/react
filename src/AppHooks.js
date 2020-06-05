import React, { useState } from "react";
import HooksMouse from "./hooksComponents/HooksMouse";
import "./AppHooks.css";

function AppHooks() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="AppHooks">
      <button onClick={() => setToggle(!toggle)}>Toggle Mouse</button>
      {toggle && <HooksMouse />}
    </div>
  );
}

export default AppHooks;
