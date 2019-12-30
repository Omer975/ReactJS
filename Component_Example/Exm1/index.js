import React from "react";
import ReactDOM from "react-dom";
import User from "./Components/User.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>Applications</h4>
      <User />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

