import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      }
    case "whisper":
      return {
        message: "excuse me"
      }
    case "normal":
      return {
        message: "Yo"
      }
  }
}

function App() {
  //we will be dispatching actions
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
      <button onClick={() => dispatch({type: "normal"})}>Normal</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

