import React, { Component } from "react";

class CurrentDateTime extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentDateTime: new Date()
    };
  }

  componentDidMount () {
    this.intervalId = setInterval(
      () => {
        this.setState({currentDateTime: new Date()});
      },
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return (
      <span className="CurrentDateTime">
        <span role="img" aria-label="clock">⏰</span>
        {this.state.currentDateTime.toLocaleString()}
      </span>
    );
  }
}

export { CurrentDateTime };
