import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: "Complete assignment 1" },
  { id: 2, title: "Review lesson 2" },
  { id: 3, title: "Prepare for presentation 3" }
];

function TodoList() {
  // Your component logic goes here

  return (
    <ul>
      {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
