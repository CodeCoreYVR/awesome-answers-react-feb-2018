import React, { Component } from "react";
import { SignInForm } from "./SignInForm";

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      sessionParams: {
        email: "",
        password: ""
      }
    }

    this.updateForm = this.updateForm.bind(this);
  }

  updateForm (params) {
    this.setState({
      sessionParams: {
        ...this.state.sessionParams,
        ...params
      }
    })
  }

  render () {
    const { sessionParams } = this.state;

    return (
      <main className="SignInPage">
        <SignInForm
          onSubmit={() => console.log("Test!")}
          onChange={this.updateForm}
          {...sessionParams}
        />
      </main>
    );
  }
}

export { SignInPage }
