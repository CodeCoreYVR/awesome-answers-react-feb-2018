import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function QuestionDetails(props) {
  return (
    <div className="QuestionDetails">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>By {props.user.full_name}</p>
      <p><strong>View Count:</strong> {props.view_count}</p>
      <p><strong>Created at:</strong> {props.created_at}</p>
    </div>
  );
}

function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p>Deep Sky Blue.</p>
      <p>By Steve</p>
      <p><strong>Created at:</strong> 2018-01-01</p>
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
      <AnswerDetails />
    </main>
  )
}

ReactDOM.render(
  <QuestionShowPage />,
  document.getElementById('root')
);
registerServiceWorker();




//
