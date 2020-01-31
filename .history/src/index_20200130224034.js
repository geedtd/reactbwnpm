//import { sithGreeting } from "./components/utils"
import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];

export function App(props) {
    const friends = props.friends;
    return <div>Hello, {siths[0].name}! How are you doing?</div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App friends={siths} />, rootElement)




// console.log(sum(2, 5));
// console.log(multiply(2,5));
// console.log(proffesion);
// console.log(utils());
// document.getElementById('app').innerHTML = `
// <h1>Hello</h1>
// <div>
// Typing away
// </div>
// `
