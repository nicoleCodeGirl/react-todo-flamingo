import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  // Create a new state variable named todoTitle with an update function named setTodoTitle
  const [todoTitle, setTodoTitle] = useState("");

  // Create a new function called handleAddTodo
  const handleAddTodo = (event) => {
    // Prevent the default behavior of the form submit
    event.preventDefault();

    // Invoke the onAddTodo callback prop and pass todoTitle as an argument
    onAddTodo(todoTitle);

    // Log the value of todoTitle in the console
    console.log("Todo Title:", todoTitle);

    // Reset the form so the text input value is cleared
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      {/* Add a name attribute to the text input with value title */}
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
