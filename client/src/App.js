import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userValue, setUserValuse] = useState("");

  const handleSubmit = () => {
    console.log("Value: " + userValue);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <input name="username" onChange={(e) => { setUserValuse(e.target.value) }} />
      <button type="submit" onClick={() => handleSubmit() }>Submit</button>


    </div>
  );
}

export default App;
