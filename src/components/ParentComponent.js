import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  state = {
    message: "Parent",
  };
  greetHandler = (name) => {
    alert(`Hello ${this.state.message} ${name}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetHandler} />
      </div>
    );
  }
}

export default ParentComponent;
