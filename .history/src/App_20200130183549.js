import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Button } from 'reactstrap';
import './App.css';


export default function Hero() {
  const [healthPoints, setHealthPoints ] = useState(100);
  const [isHappy, setIsHappy ] = useState(true);

  return <div>
    <div>Health Points: <span>{healthPoints}</span></div>
    <div>{isHappy ? 'Really Happy' : "Having a bad day"}</div>
    <button onClick={}>Have a great meal</button>
  </div>

}


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Hero/>,
     rootElement
     );


     //setTimeout to make animation!!