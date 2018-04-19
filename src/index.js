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
      <p>Created 10 days ago</p>
    </div>
  )
}

ReactDOM.render(
  <QuestionDetails />,
  document.getElementById('root')
);
registerServiceWorker();




//
