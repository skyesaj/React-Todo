// import React from "react";
import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./index.css";
const data = [
  {
    task: "Clean Up",
    id: 1528817077286,
    complete: false
  },
  {
    task: "Wash dishes",
    id: 1528817084358,
    complete: false
  },
  {
    task: "Take Out Trash",
    id: 1528817084345,
    complete: false
  },
  {
    task: "Walk Dog",
    id: 1528817084357,
    complete: false
  },
  {
    task: "Make Dinner",
    id: 1528817084350,
    complete: false
  }
];

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

// Constructor with state

class App extends Component {
  constructor() {
    super();
    // state object?
    this.state = {
      todo: data
    };
  }

  ////////

  toggleCompleted = id => {
    const newList = this.state.todo.map(items => {
      if (items.id === id) {
        return {
          ...items,
          complete: !items.complete
        };
      } else {
        return items;
      }
    });
    // update
    this.setState({
      todo: newList
    });
  };
  // adding new task
  addTask = newTaskA => {
    const newTask = {
      task: newTaskA,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };
  deleteComplete = () => {
    this.setState({
      todo: this.state.todo.filter(task => task.complete === false)
    });
  };

  render() {
    return (
      // <Container>
      <div className="header">
        <div>
          <h1> TO-DO LIST</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          data={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          deleteComplete={this.deleteComplete}
        />
      </div>
    );
  }
}

export default App;
