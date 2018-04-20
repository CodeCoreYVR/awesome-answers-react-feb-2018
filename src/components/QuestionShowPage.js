import React, { Component } from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import questionDetails from "../data/detailedQuestion";

class QuestionShowPage extends Component {
  render() {
    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...questionDetails} />
        <h2>Answers</h2>
        <AnswerList answers={questionDetails.answers} />
      </main>
    )
  }
}

export { QuestionShowPage };
