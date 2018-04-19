import React from "react";
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

function App () {
  return (
    <div className="App">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  )
}

export { App };
