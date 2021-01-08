import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    //preventDefault prevent from reloading after click
    e.preventDefault();
    //.current.value is provided by our useRef function
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <form onSubmit={submit}>
        <h1>
          What color matches the sound?!
        </h1>
      <input ref={sound} type="text" placeholder="Sound..."></input>
      <input ref={color} type="color"></input>
      <button>Add</button>
    </form>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

