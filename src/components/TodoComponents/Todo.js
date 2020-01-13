import React from "react";

const Todo = props => {
  return (
    <li>
      <div
        className={`items${props.items.completed ? "completed" : ""}`}
        onClick={() => props.toggleCompleted(props.items.id)}
      >
        <p>{props.items.task}</p>
      </div>
    </li>
  );
};
export default Todo;
