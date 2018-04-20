import React from "react";
import { Field } from "./Field";

function AnswerDetails(props) {
  const { onDeleteClick = () => {} } = props;

  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <Field
        name="Created At"
        value={new Date(props.created_at).toLocaleString()}
      />
      <button onClick={() => onDeleteClick(props.id)}>Delete</button>
    </div>
  )
}

export { AnswerDetails };
