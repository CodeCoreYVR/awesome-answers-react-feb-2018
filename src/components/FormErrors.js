import React from "react";

function FormErrors(props) {
  const { forField, errors = [] } = props;

  let filteredErrors;
  if (forField) {
    filteredErrors = errors.filter(
      e => e.field.toLowerCase() === forField.toLowerCase()
    );
  } else {
    filteredErrors = errors;
  }

  if (filteredErrors.length > 0) {
    return (
      <ul className="FormErrors">
        {
          filteredErrors.map(
            (err, i) => <li key={i}>{err.message}</li>
          )
        }
      </ul>
    );
  } else {
    return null;
  }
}
export { FormErrors }
