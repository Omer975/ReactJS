import React from "react";
import ReactDOM from "react-dom";
import User from "./Components/User.js";
import Navbar from "./Components/navbar.js";
import Prop from "./Components/props";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h4>Applications</h4> */}
      <Navbar />
      <hr />
      <User />
      <Prop Name="Ömer" Department="IT" Company="Malmo University" />
      <Prop
        Name="Zeynep"
        Department="Child Development"
        Company="Lund University"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
