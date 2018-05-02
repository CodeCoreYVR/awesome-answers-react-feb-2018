import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field } from "./Field";
import { Question } from "../requests/question";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      loading: true,
      questions: []
    }

    // Methods that used as callbacks will no longer
    // be owned by their instance once they're called meaning
    // that their `this` will be either `undefined` or
    // `Window`. Use the `bind` on the method to permanently
    // set its `this` to the instance's `this`.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentWillMount () {
    const queryString = this.props.location.search;
    const page = new URLSearchParams(queryString).get("page") || 1;

    this.setState({
      page: page
    });
  }

  componentDidMount () {
    Question
      .all({page: this.state.page})
      .then(questions => {
        this.setState({questions: questions, loading: false})
      });
  }

  deleteQuestion (questionId) {
    return () => {
      const { questions } = this.state;

      this.setState({
        questions: questions.filter(q => q.id !== questionId)
      });
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <main className="QuestionIndexPage">
          <h2>Loading Questions...</h2>
        </main>
      );
    }

    return (
      <main className="QuestionIndexPage">
        <h2>Questions</h2>
        <ul>
          {
            this.state.questions.map(
              (question, index) => (
                <li key={question.id}>
                  <Link to={`/questions/${question.id}`}>
                    {question.title}
                  </Link>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <Field name="Author" value={question.author.full_name} />
                    <button onClick={this.deleteQuestion(question.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              )
            )
          }
        </ul>
        <Link to={`/questions?page=${this.state.page + 1}`}>
          Next Page
        </Link>
      </main>
    )
  }
}

export { QuestionIndexPage };
