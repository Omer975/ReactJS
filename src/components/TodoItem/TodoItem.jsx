import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, completed }) => {
  const className = [
    "todo-item",
    completed ? "todo-item--completed" : "todo-item--pending"
  ].join(" ");

  return <li className={className}>{text}</li>;
};

export default TodoItem;
