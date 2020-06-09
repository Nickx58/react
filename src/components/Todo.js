import React, { Component } from "react";

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
      allTodos: [],
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ allTodos: this.state.todos });
  }

  addTodo = (e) => {
    const { todos } = this.state;
    if (e.key === "Enter") {
      let newList = [
        ...todos,
        { task: e.target.value, status: "Pending", id: todos.length + 1 },
      ];
      this.setState({ todos: newList, allTodos: newList });
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

  filterTodo = (key) => {
    if (key === "all") {
      this.setState({ todos: this.state.allTodos });
      return;
    }
    let newList = this.state.allTodos.filter((todo) => {
      return todo.status === key;
    });
    this.setState({ todos: newList });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>to-do({todos.length})</h1>
        <button onClick={() => this.filterTodo("all")}>All</button>
        <button onClick={() => this.filterTodo("Completed")}>Completed</button>
        <button onClick={() => this.filterTodo("Pending")}>Pending</button>
        <br />
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
