// import React, { useState } from "react";

function AddTodoForm(props) {
  // // Create a new state variable named todoTitle with an update function named setTodoTitle
  // const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    // Prevent the default behavior of the form submit
    event.preventDefault();
    // Store todoTitle in a variable
    const todoTitle = event.target.title.value
    
    // Invoke the onAddTodo callback prop and pass todoTitle as an argument (using props instead of destructuring)
   props.onAddTodo(todoTitle);
    // Log the value of todoTitle in the console
    console.log("Todo Title:", todoTitle);
    // Reset the form so the text input value is cleared
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      {/* Add a name attribute to the text input with value title */}
      <input
        type="text"
        id="todoTitle"
        name="title"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
