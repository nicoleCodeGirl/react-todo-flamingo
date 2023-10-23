import React from "react";

const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Review lesson 2" },
    { id: 3, title: "Prepare for presentation 3" }
  ];

function TodoList() {
  // Your component logic goes here

  return (
    <ul>
      {todoList.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
