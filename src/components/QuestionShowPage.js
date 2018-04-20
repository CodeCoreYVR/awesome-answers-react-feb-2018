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

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  deleteQuestion() {
    this.setState({
      question: {}
    })
  }

  deleteAnswer(answerId) {
    const { question } = this.state;
    const { answers = [], ...restQuestion } = question;

    this.setState({
      question: {
        ...restQuestion,
        answers: answers.filter(a => a.id !== answerId)
      }
    })
  }

  render() {
    if (!this.state.question.id) {
      return (
        <main className="QuestionShowPage">
          <h2>Question doesn't exist!</h2>
        </main>
      )
    }

    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...this.state.question} />
        <button onClick={this.deleteQuestion}>Delete</button>
        <h2>Answers</h2>
        <AnswerList
          onAnswerDeleteClick={this.deleteAnswer}
          answers={this.state.question.answers}
        />
      </main>
    )
  }
}

export { QuestionShowPage };
