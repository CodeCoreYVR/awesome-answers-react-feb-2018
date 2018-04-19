import React from "react";
import { AnswerDetails } from "./AnswerDetails";

function AnswerList(props) {
  const { answers = [] } = props;

  return (
    <ul className="AnswerList">
      {
        answers.map((answer, index) => (
          <li key={answer.id}>
            {/* <AnswerDetails
              body={answer.body}
              author_full_name={answer.author_full_name}
              created_at={answer.created_at}
            /> */}
            <AnswerDetails {...answer} />
          </li>
        ))
      }
    </ul>
  )
}

export { AnswerList };
