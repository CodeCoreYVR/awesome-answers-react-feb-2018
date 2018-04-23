import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentDateTime } from "./CurrentDateTime";

function NavBar (props) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
    </nav>
  );
}

export { NavBar };
