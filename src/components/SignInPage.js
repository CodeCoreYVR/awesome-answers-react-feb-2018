import React, { Component } from "react";
import { SignInForm } from "./SignInForm";
import { Token } from "../requests/token";

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      tokenParams: {
        email: "",
        password: ""
      }
    }

    this.updateForm = this.updateForm.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signIn () {
    const tokenParams = this.state.tokenParams;
    const { onSignIn = () => {} } = this.props;

    Token
      .create(tokenParams)
      .then(data => {
        onSignIn(data);
        localStorage.setItem("JWT", data.jwt);
        this.props.history.push("/");
      });
  }

  updateForm (params) {
    this.setState({
      tokenParams: {
        ...this.state.tokenParams,
        ...params
      }
    })
  }

  render () {
    const { tokenParams } = this.state;

    return (
      <main className="SignInPage">
        <SignInForm
          onSubmit={this.signIn}
          onChange={this.updateForm}
          {...tokenParams}
        />
      </main>
    );
  }
}

export { SignInPage }
