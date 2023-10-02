import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment 1" },
  { id: 2, title: "Review lesson 2" },
  { id: 3, title: "Prepare for presentation 3" }
];

const list = document.querySelector("ul");

// Map over the todoList array and generate <li> elements
const todoItems = todoList.map(item => {
  const listItem = document.createElement("li");
  listItem.setAttribute("key", item.id); // Set the 'key' attribute with the 'id' property
  listItem.textContent = item.title; // Set the text content with the 'title' property
  return listItem;
});

// Append the generated <li> elements to the <ul>
todoItems.forEach(item => {
  list.appendChild(item);
});




function App() {
  return (
    // <div style={{ textAlign: 'center' }}>
    //   <header>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <h1>
      <ul></ul>
    </h1>
  );
}

export default App;
