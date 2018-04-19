import React from "react";
import { Field } from './Field';

function QuestionDetails(props) {
  return (
    <div className="QuestionDetails">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>By {props.user.full_name}</p>
      <Field name="View Count" value={props.view_count} />
      <Field name="Created At" value={props.created_at} />
    </div>
  );
}

export { QuestionDetails };
