import React from 'react';
import logo from './logo.svg';
import { Button, Navbar } from 'reactstrap';
import './App.css';
import Top from './navImg';
import { Fragment } from 'react';
import NavBar from './components/navBar';




export default function App() {
  return (
    <main>
      
    <div className="App">
      <NavBar/>
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
    </main>
    
  );
}

