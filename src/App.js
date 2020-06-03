import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import PortalDemo from "./components/PortalDemo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PortalDemo />
      <Greet name="React">
        <p> I'm the best js framework </p>
      </Greet>
      <Welcome name="Vue" />
      <Message />
      <Counter />
      <p>Child Parent Event Handler example</p>
      <ParentComponent />
      <p> Form Examples </p>
      <Form />
      <LifeCycleA />
    </div>
  );
}

export default App;
