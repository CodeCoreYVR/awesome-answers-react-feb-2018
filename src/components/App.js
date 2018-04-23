import React from "react";
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { CurrentDateTime } from "./CurrentDateTime";

function App () {
  return (
    <div className="App">
      <CurrentDateTime />
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  )
}

export { App };
