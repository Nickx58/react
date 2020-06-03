import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="React">
        <p> I'm the best js framework </p>
      </Greet>
      <Welcome name="Vue" />
      <Message />
      <Counter />
      <p>Child Parent Event Handler example</p>
      <ParentComponent />
    </div>
  );
}

export default App;
