import React, { Component } from "react";

class Form extends Component {
  state = {
    userName: "",
    select: "react",
  };

  handleInputChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleSelectChange = (e) => {
    this.setState({
      select: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    const { userName, select } = this.state;
    alert(`${userName} ${select}`);
    e.preventDefault();
  };
  render() {
    const { userName, select } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>UserName:</label>
            <input
              type="text"
              value={userName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Select:</label>
            <select value={select} onChange={this.handleSelectChange}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>InPut Value: {userName}</p>
        <p>Select Value: {select}</p>
      </>
    );
  }
}

export default Form;
