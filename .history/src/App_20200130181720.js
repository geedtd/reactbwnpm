import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Button } from 'reactstrap';
import './App.css';

function Bulb() {
  const [isBulbOn, setIsBulbOn ] = useState(false);
  
  if (isBulbOn) {
      return <div>The bulb is on</div>
  } 
  
  return <div>The lightbulb is off</div>;
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Bulb/>,
     rootElement
     );

