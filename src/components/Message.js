import React, { Component } from "react";

class Message extends Component {
  state = {
    message: "Hello Visitor",
  };

  changeText = () => {
    this.setState({ message: "Thanks for subscribing" });
  };

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={this.changeText}> Subscribe </button>
      </div>
    );
  }
}
export default Message;
