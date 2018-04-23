import React, { Component } from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { AnswerForm } from "./AnswerForm";
import { Question } from "../requests/question";

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      question: {}
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  componentDidMount() {
    // Components rendered by the <Route /> component
    // are given three 3 props:
    // - "history" is used to manipulation the browser history
    //   allowing you to programmatically send used to different
    //   locations.
    // - "location" which holds information about the url location
    //   of the user.
    // - "match" which holds the params for the current url.

    // console.log(this.props)
    const questionId = this.props.match.params.id;

    Question
      .one(questionId)
      .then(question => {
        this.setState({question: question, loading: false});
      });
  }

  deleteQuestion() {
    this.setState({
      question: {}
    })
  }

  createAnswer(answer) {
    // When creating components, try to keep your flat as
    // much as possible. Deeply nested is hard to work with
    // and is more difficult for React to figure out if it
    // needs to re-render your components.
    const { question } = this.state;
    const { answers, ...restQuestion } = question;

    this.setState({
      question: {
        ...restQuestion,
        answers: [
          {
            ...answer,
            created_at: new Date(),
            id: Math.random() * 100000
          }
        ].concat(answers)
      }
    });
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
    if (this.state.loading) {
      return (
        <main className="QuestionShowPage">
          <h2>Loading Question...</h2>
        </main>
      )
    }

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
        <AnswerForm
          onSubmit={this.createAnswer}
        />
        <AnswerList
          onAnswerDeleteClick={this.deleteAnswer}
          answers={this.state.question.answers}
        />
      </main>
    )
  }
}

export { QuestionShowPage };
