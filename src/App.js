// import React from "react";
import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const data = [
  {
    task: "Clean up",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Wash dishes",
    id: 1528817084358,
    completed: false
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

  toggleCompleted = items => {
    const newList = this.state.todo.map(items => {
      if (items === items.id) {
        return {
          ...items,
          completed: !items.completed
        };
      } else {
        return items;
      }
    });

    this.setState({
      todoList: newList
    });
  };

  addTask = newTaskA => {
    const newTask = {
      task: newTaskA,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  // deleteComplete = () => {
  //   this.setState({
  //     todo: this.state.todo.filter(task => {
  //       return task.completed === false;
  //     })
  //   });
  // };

  render() {
    return (
      // <Container>
      <div>
        <h1> Here is Your To-do App!</h1>
        <TodoForm addTask={this.addTask} />

        <TodoList
          data={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          // deleteComplete={this.deleteComplete}
        />
      </div>
    );
  }
}

export default App;
