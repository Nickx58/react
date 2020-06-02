import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
    // this.changeText = this.changeText.bind(this);
  }

  changeText = () => {
    this.setState({
      message: "Thanks for coming UP!",
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        {/* <button onClick={this.changeText.bind(this)}> Subscribe </button> */}
        {/* <button onClick={() => this.changeText()}> Subscribe </button> */}
        <button onClick={this.changeText}> Subscribe </button>
      </div>
    );
  }
}
export default Message;
