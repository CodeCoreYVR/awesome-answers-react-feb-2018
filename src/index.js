import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function Field(props) {
  return (
    <p className="Field">
      <strong>{props.name}:</strong> <em>{props.value}</em>
    </p>
  )
}

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

function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By {props.user.full_name}</p>
      <Field name="Created At" value={props.created_at} />
    </div>
  )
}

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
      <AnswerDetails
        body="Deep Sky Blue."
        user={{full_name: "Steve"}}
        created_at={new Date().toLocaleString()}
      />
    </main>
  )
}

ReactDOM.render(
  <QuestionShowPage />,
  document.getElementById('root')
);
registerServiceWorker();




//
