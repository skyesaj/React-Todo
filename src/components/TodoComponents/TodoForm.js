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
  // updates state
  handleChanges = e => {
    this.setState({
      todoContent: e.target.value
    });
  };

  //  class prp submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoContent);
  };

  // uncontrolled component controlled b state
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="items"
          //   placeholder="add task"
          value={this.state.todoContent}
          onChange={this.handleChanges}
        />

        <a href="#" class="button">
          <button> Add Task</button>
        </a>
        {/* <button>Add Task</button> */}
        {/* <button>Clear</button> onClick={this.props.deleteComplete}> */}
      </form>
      // <div>
      //   <h3>To do form</h3>
      // </div>
    );
  }
}
export default TodoForm;
