import React from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerDetails } from "./AnswerDetails";
import { AnswerList } from "./AnswerList";
import questionDetails from "../data/detailedQuestion";

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
      <AnswerList answers={questionDetails.answers} />
    </main>
  )
}

export { QuestionShowPage };
