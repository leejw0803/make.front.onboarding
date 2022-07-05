import React from "react";
import TodoList from "./components/container/TodoList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
