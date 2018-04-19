import React from "react";

function Field(props) {
  return (
    <p className="Field">
      <strong style={{
        color: "white",
        backgroundColor: "maroon",
        borderRadius: "3px",
        padding: "0 4px"
      }}>{props.name}</strong> <em>{props.value}</em>
    </p>
  )
};

export { Field };
