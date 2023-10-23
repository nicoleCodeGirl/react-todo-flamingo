import React from 'react';
import AddTodoForm from "./AddTodoForm"; // Import the AddTodoForm component
import TodoList from "./TodoList"; // Import the TodoList component


function App() {
  return (
    <div>
    <h1>ToDo List</h1>
    <AddTodoForm /> {/* Render the AddTodoForm component here */}
    <TodoList /> {/* Render the TodoList component here */}
  </div>
  );
}

export default App;
