import React, { Component } from "react";
import "../App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          task: "Coffe",
          status: "Pending",
        },
        {
          id: 2,
          task: "Study",
          status: "Pending",
        },
      ],
    };
    this.inputRef = React.createRef();
  }

  addTodo = (e) => {
    const { todos } = this.state;
    if (e.key === "Enter") {
      let newList = [
        ...todos,
        { task: e.target.value, status: "Pending", id: todos.length + 1 },
      ];
      this.setState({ todos: newList });
      this.inputRef.current.value = "";
    }
  };

  removeTodo = (e) => {
    const { todos } = this.state;
    let newList = todos.filter((todo) => {
      return todo.id !== e;
    });
    this.setState({ todos: newList });
  };

  changeStatus = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.map((todo) => ({
        ...todo,
        status: todo.id === id ? (todo.status = "Completed") : todo.status,
      })),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>to-do({todos.length})</h1>
        <input
          type="text"
          ref={this.inputRef}
          onKeyPress={this.addTodo}
          placeholder="Enter todo"
        />
        <ol>
          {todos.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <li onClick={() => this.changeStatus(todo.id)}>
                  {todo.task}
                  <p>Status: {todo.status}</p>
                </li>
                <button onClick={() => this.removeTodo(todo.id)}>Delete</button>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Todo;
