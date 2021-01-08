import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <>
      <input
        type="checkbox"
        value={checked}s
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

