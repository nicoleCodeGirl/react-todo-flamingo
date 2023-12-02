import React, { useState } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  // Create a new state variable named newTodo with an update function named setNewTodo
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>ToDo List</h1>
     
      {/* Render the AddTodoForm component and pass setNewTodo as a callback handler prop */}
      <AddTodoForm onAddTodo={setNewTodo} />
      {/* Render the TodoList component here */}

       {/* Display the value of newTodo variable */}
       <p>New Todo: {newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
