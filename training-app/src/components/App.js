import React from 'react';    // 1. Import the React Library
import logo from '../logo.svg';// 2. Import the logo used on the page
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello React!
        </h2>
        <p>
          { /* Inline script between curly braces: */ }
          Today is { new Date().toDateString() }
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
    </div>
  );
}

export default App;
