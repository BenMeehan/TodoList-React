import React from "react";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div
      className="ui container"
      style={{ textAlign: "center", marginTop: "2%" }}
    >
      <TodoList />
    </div>
  );
};

export default App;
