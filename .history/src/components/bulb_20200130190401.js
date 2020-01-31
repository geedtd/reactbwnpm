import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Button } from 'reactstrap';



export default function Bulb() {
    const [isBulbOn, setIsBulbOn ] = useState(true);
    
    const lightSwitch = e => {
        setIsBulbOn(false)
    }
    
    return <div><div>{isBulbOn ? "Light is ON" : "Light is OFF"}</div>
           <button onClick={lightSwitch}>Lightswitch</button>
           <button onClick={!lightSwitch}>Lightswitch On</button>
           </div>
}


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Bulb/>,
     rootElement
     );