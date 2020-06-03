import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
    console.log("Life Cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle B getDerivedStateFrom Props");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle B Component Did Mount");
  }

  render() {
    console.log("Life Cycle B render");
    return (
      <div>
        <p>Life Cycle B</p>
      </div>
    );
  }
}

export default LifeCycleB;
