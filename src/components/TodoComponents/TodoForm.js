import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      //   task: "",
      //   id: "",
      //   completed: false
      todoContent: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todoContent: e.target.value
    });
  };

  //   submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoContent);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id=""
          type="text"
          name="items"
          placeholder="add task"
          value={this.state.todoContent}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
      //   <div>
      //     <h3>To do form</h3>
      //   </div>
    );
  }
}
export default TodoForm;
