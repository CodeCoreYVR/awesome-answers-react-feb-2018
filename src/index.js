import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function QuestionDetails(props) {
  return (
    <div className="QuestionDetails">
      <h1>What is your favourite color?</h1>
      <p>Red, green, blue, magenta, yellow, cyan, etc.</p>
      <p>By Bridge Troll</p>
      <p><strong>View Count:</strong> 111</p>
      <p><strong>Created at:</strong> 2018-01-01</p>
    </div>
  )
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
      <QuestionDetails />
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
