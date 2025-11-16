import React from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  return (
    <div className="App container">
      <h1>Todo List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
