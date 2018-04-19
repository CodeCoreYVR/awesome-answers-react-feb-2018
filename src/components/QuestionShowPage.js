import React from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerDetails } from "./AnswerDetails";

function QuestionShowPage(props) {
  return (
    <main className="QuestionShowPage">
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, Blue, Magenta, etc."
        user={{full_name: "Steve"}}
        view_count={1000}
        created_at={new Date().toLocaleString()}
      />
      <h2>Answers</h2>
      <AnswerDetails
        body="Deep Sky Blue."
        user={{full_name: "Steve"}}
        created_at={new Date().toLocaleString()}
      />
    </main>
  )
}

export { QuestionShowPage };
