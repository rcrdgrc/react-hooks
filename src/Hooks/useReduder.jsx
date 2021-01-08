import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  // const [number, setNumber] = useReducer(function , initial state);
  const [number, setNumber] = useReducer(
    (number, newNum) => number + newNum,
    0
  );
  return <h1 onClick={() => setNumber(1)}>{number}</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

