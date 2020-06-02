import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Greet name="React">
        <p> I'm the best js framework </p>
      </Greet>
      <Greet name="Vue">
        <button>Chines</button>
      </Greet>
      <Greet name="Angular" />
      <Welcome name="React" />
      <Welcome name="Vue" />
    </div>
  );
}

export default App;
