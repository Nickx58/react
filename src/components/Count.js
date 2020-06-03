import React, { Component } from "react";
import UpdatedComponent from "./withCount";

class Count extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Button clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(Count);
