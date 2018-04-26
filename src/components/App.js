import React, { Component } from "react";
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
import { SignInPage } from "./SignInPage";
import { NavBar } from "./NavBar";
import jwtDecode from "jwt-decode";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null
    }

    this.signInUser =  this.signInUser.bind(this);
  }

  componentWillMount () {
    this.signInUser();
  }

  signInUser() {
    const jwt = localStorage.getItem("JWT");

    if (jwt) {
      const payload = jwtDecode(jwt);

      this.setState({
        user: payload
      });
    }
  }

  render () {
    const { user } = this.state;
    // Whe using react-router, you must the <Router> component
    // the root component of your application. <Router> component
    // can only have one child.
    return (
      <Router>
        <div className="App">
          <NavBar user={user} />
          <Switch>
            {/*
              Switch forces there to be only Route component
              that matches. The first one that matches is the only
              that is rendered inside of the Switch.
            */}
            <Route
              path="/sign_in"
              render={
                props =>
                  <SignInPage {...props} onSignIn={this.signInUser} />
              }
            />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <Route path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export { App };
