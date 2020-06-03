import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  state = {
    name: "Nikhil",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Nikhil",
      });
    }, 2000);
  }
  render() {
    console.log("********Parent*********");
    return (
      <div>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
