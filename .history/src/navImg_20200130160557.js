import React from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';


export default function Top() {
    return (
      <div className="topImg">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color='warning'>Under IMG</Button>
      </div>

    )
  }
