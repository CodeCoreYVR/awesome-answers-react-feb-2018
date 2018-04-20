import React from "react";
import { AnswerDetails } from "./AnswerDetails";

function AnswerList(props) {
  const { answers = [], onAnswerDeleteClick = () => {} } = props;

  return (
    <ul className="AnswerList">
      {
        answers.map((answer, index) => (
          <li key={answer.id}>
            <AnswerDetails onDeleteClick={onAnswerDeleteClick} {...answer} />
          </li>
        ))
      }
    </ul>
  )
}

export { AnswerList };
