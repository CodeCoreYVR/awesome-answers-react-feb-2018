import React, { Component } from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import questionDetails from "../data/detailedQuestion";

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: questionDetails
    };
  }

  render() {
    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...this.state.question} />
        <h2>Answers</h2>
        <AnswerList answers={this.state.question.answers} />
      </main>
    )
  }
}

export { QuestionShowPage };
