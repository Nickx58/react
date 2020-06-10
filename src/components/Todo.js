import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: Math.random(),
          task: "Coffe",
          status: "Pending",
        },
        {
          id: Math.random(),
          task: "Study",
          status: "Pending",
        },
      ],
      currentFilter: "All",
    };
    this.inputRef = React.createRef();
  }

  selectFilter = (filter) => {
    this.setState({
      currentFilter: filter,
    });
  };

  addTodo = (e) => {
    const { todos } = this.state;
    if (e.key === "Enter") {
      let newList = [
        ...todos,
        { task: e.target.value, status: "Pending", id: Math.random() },
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

  getTodos = (todoLists) => {
    let filterdata = [];
    const { currentFilter } = this.state;
    if (currentFilter === "All") {
      filterdata = [...todoLists];
    } else if (currentFilter === "Completed") {
      filterdata = todoLists.filter((el) => el.status === "Completed");
    } else {
      filterdata = todoLists.filter((el) => el.status === "Pending");
    }
    if (!filterdata.length) return null;
    let element = filterdata.map((todo) => {
      return (
        <React.Fragment key={todo.id}>
          <li onClick={() => this.changeStatus(todo.id)}>
            {todo.task}
            <p>Status: {todo.status}</p>
          </li>
          <button onClick={() => this.removeTodo(todo.id)}>Delete</button>
        </React.Fragment>
      );
    });
    return <ul>{element}</ul>;
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <button onClick={() => this.selectFilter("All")}>All</button>
        <button onClick={() => this.selectFilter("Completed")}>
          Completed
        </button>
        <button onClick={() => this.selectFilter("Pending")}>Pending</button>
        <br />
        <input
          type="text"
          ref={this.inputRef}
          onKeyPress={this.addTodo}
          placeholder="Enter todo"
        />
        <div>{this.getTodos(todos)}</div>
      </div>
    );
  }
}

export default Todo;
