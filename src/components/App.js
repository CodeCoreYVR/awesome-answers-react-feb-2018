import React from "react";
import {
  // When doing named imports, you can use `as` to rename
  // an import in the context of a file.
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { QuestionNewPage } from "./QuestionNewPage";
import { NavBar } from "./NavBar"

function App () {
  // Whe using react-router, you must the <Router> component
  // the root component of your application. <Router> component
  // can only have one child.
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {/*
            Switch forces there to be only Route component
            that matches. The first one that matches is the only
            that is rendered inside of the Switch.
          */}
          <Route exact path="/questions" component={QuestionIndexPage} />
          <Route path="/questions/new" component={QuestionNewPage} />
          <Route path="/questions/:id" component={QuestionShowPage} />
        </Switch>
      </div>
    </Router>
  )
}

export { App };
