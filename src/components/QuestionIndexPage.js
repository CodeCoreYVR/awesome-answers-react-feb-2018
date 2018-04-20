import React, { Component } from "react";
import { Field } from "./Field";
import allQuestions from "../data/allQuestions";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      questions: allQuestions
    }

    // Methods that used as callbacks will no longer
    // be owned by their instance once they're called meaning
    // that their `this` will be either `undefined` or
    // `Window`. Use the `bind` on the method to permanently
    // set its `this` to the instance's `this`.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  deleteQuestion (event) {
    const { currentTarget } = event;
    const { questions } = this.state;

    this.setState({
      questions: questions.filter(
        q => q.id !== parseInt(currentTarget.dataset.id, 10)
      )
    });
  }

  render () {
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <ul>
          {
            this.state.questions.map(
              (question, index) => (
                <li key={question.id}>
                  <a href="">{question.title}</a>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <Field name="Author" value={question.author.full_name} />
                    <button
                      data-id={question.id}
                      onClick={this.deleteQuestion}>
                      Delete
                    </button>
                  </div>
                </li>
              )
            )
          }
        </ul>
      </main>
    )
  }
}

export { QuestionIndexPage };
