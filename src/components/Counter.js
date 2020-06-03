import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 }, () =>
      console.log("Callback", this.state.count)
    );
  };

  incrementPrevStateExample() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementByFive = () => {
    this.incrementPrevStateExample();
    this.incrementPrevStateExample();
    this.incrementPrevStateExample();
    this.incrementPrevStateExample();
    this.incrementPrevStateExample();
  };
  render() {
    return (
      <div>
        <h5>Count: {this.state.count}</h5>
        <button onClick={this.onIncrement}>Increment by 1</button>
        <button onClick={this.incrementByFive}>Increment by 5</button>
      </div>
    );
  }
}

export default Counter;
