// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ol>
      {props.data.map(items => (
        <Todo
          key={items.id}
          items={items}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </ol>
  );
};

// const TodoList = props => {
// return(
//     <div>
//         {props.data.map(item =>
//             return <Todo item={item}key={item.id} toggleComplete={props.toggleComplete}/>
//         })}
//     </div>
// );

export default TodoList;
