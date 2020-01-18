// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    // <ol>
    <div className="list">
      {props.data.map(items => (
        <Todo
          key={items.id}
          items={items}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="delete" onClick={props.deleteComplete}>
        Delete ToDo
        {/* {" "} */}
      </button>
    </div>
    // </ol>
  );
};

export default TodoList;
