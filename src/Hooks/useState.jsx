import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
    console.log(`Celebrate ${name}`)
  },[name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`)
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")} >
        Change Winner
      </button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(!admin)} >
        Log In
      </button>
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

