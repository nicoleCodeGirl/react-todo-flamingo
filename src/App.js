import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment 1" },
  { id: 2, title: "Review lesson 2" },
  { id: 3, title: "Prepare for presentation 3" }
];



function App() {
  return (
    <div>
    <h1>ToDo List</h1>
    <ul>
      {todoList.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  );
}

export default App;
