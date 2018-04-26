import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentDateTime } from "./CurrentDateTime";

function NavBar (props) {
  const { user, onSignOut = () => {} } = props;

  const handleSignout = event => {
    event.preventDefault();
    onSignOut();
  }

  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions/new">New Question</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
      {user ? (
        [
          <span>Hello, {user.first_name}!</span>,
          <a href="" onClick={handleSignout}>Sign Out</a>
        ].map((el, i) => React.cloneElement(el, {key: i}))
      ) : (
        <NavLink exact to="/sign_in">Sign In</NavLink>
      )}
      <CurrentDateTime />
    </nav>
  );
}

export { NavBar };
