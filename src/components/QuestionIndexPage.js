import React, { Component } from "react";
import { Field } from "./Field";
import allQuestions from "../data/allQuestions";

class QuestionIndexPage extends Component {
  render () {
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <ul>
          {
            allQuestions.map(
              (question, index) => (
                <li key={question.id}>
                  <a href="">{question.title}</a>
                  <Field name="Author" value={question.author.full_name} />
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
