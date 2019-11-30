import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/**
 * EXERCISE:
 * This linke gives and error because there is not
 * TodoItem component!
 *
 * Build it :-)
 */
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem id="x1" text="Buy milk" />
      <TodoItem id="x1" text="Buy milk" completed />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
