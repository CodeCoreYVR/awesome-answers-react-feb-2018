import React from "react";
import {
  // When doing named imports, you can use `as` to rename
  // an import in the context of a file.
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { CurrentDateTime } from "./CurrentDateTime";
import { NavBar } from "./NavBar"

function App () {
  // Whe using react-router, you must the <Router> component
  // the root component of your application. <Router> component
  // can only have one child.
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </Router>
  )
}

export { App };
