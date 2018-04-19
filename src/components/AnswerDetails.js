import React from "react";
import { Field } from "./Field";

function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By {props.user.full_name}</p>
      <Field name="Created At" value={props.created_at} />
    </div>
  )
}

export { AnswerDetails };
