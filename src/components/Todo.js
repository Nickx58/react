import React, { Component } from "react";
import "../App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Buy Coffee", "Study"],
    };
    this.inputRef = React.createRef();
  }

  addTodo = (e) => {
    const { todos } = this.state;
    if (e.key === "Enter") {
      let newList = [...todos, e.target.value];
      this.setState({ todos: newList });
      this.inputRef.current.value = "";
    }
  };

  removeTodo = (e) => {
    const { todos } = this.state;
    let newList = todos.filter((todo, index) => {
      return index !== e;
    });
    this.setState({ todos: newList });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>to-do({todos.length})</h1>
        <input
          type="text"
          ref={this.inputRef}
          onKeyPress={this.addTodo}
          placeholder="Enter todo"
        />
        <ol>
          {todos.map((todo, index) => {
            return (
              <li onClick={() => this.removeTodo(index)} key={index}>
                {todo}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Todo;
