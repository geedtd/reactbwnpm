import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Button } from 'reactstrap';
import './App.css';


export default function Bulb() {
  const [isBulbOn, setIsBulbOn ] = useState(false);
  
  setTimeout(() => {
    setIsBulbOn(!isBulbOn)
  }, 1000);
  
  return <div>The lightbulb is {isBulbOn ? 'ON!' : 'off'}</div>;
}


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Bulb/>,
     rootElement
     );


     //setTimeout to make animation!!