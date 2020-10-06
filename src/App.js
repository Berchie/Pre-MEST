import React from 'react';
import logo from './logo.svg';
import logo1 from './logo192.png';
import './App.css';

function App() {
  return (
    <div className="App-div">
      {/* <header className="App-header">
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
      </header> */}
      <header className="App-header-Menu">
          <img src={logo1} className="App-logo1" alt="logo" />
          <ul>
            <li className="links">
              <a href="https://reactjs.org" target="-blank" rel="noopener noreferrer">About</a>
            </li>
            <li className="links">
              <a href="https://meltwater.org" target="_blank" rel="noopener noreferrer">Contact</a>
            </li>
          </ul>
      </header>
    </div>
  );
}

export default App;
