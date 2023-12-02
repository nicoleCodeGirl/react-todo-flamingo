import React from "react";

function TodoListItem(props) {
  // Destructuring props to get individual properties
  const { title } = props.todo;

  // Your component logic goes here

  return (
    <li>{title}</li>
  );
}

export default TodoListItem;
