import React, { Component } from "react";
import { QuestionForm } from "./QuestionForm";
import { Question } from "../requests/question";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question
      .create(params)
      .then(data => {
        const questionId = data.id;
        this.props.history.push(`/questions/${questionId}`);
      })
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h2>Question New Page</h2>
        <QuestionForm onSubmit={this.createQuestion} />
      </main>
    );
  }
}

export { QuestionNewPage };
