import React from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import Top from './navImg';
import { Fragment } from 'react';
import navBar from './components/navBar';




function App() {
  return (
    <div className="App">
      <Button color='warning'>This Be A Button</Button>
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
    </div>
  );
}

export default App;
