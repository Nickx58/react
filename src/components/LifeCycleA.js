import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
    console.log("Life Cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDerivedStateFrom Props");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A Component Did Mount");
  }

  render() {
    console.log("Life Cycle A render");
    return (
      <div>
        <p>Life Cycle A</p>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
