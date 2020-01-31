//import { sithGreeting } from "./components/utils"
import React from 'react';
import ReactDOM from 'react-dom';


const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];

function App(props) {
    const friends = props.friends;
    return (
        <>
            <Greeter who={friends[0].name} />
            <Greeter who={friends[0].name} />
        </>
    );
}

function Greeter(props) {
    const { who } = props;
    return <div>Hello, {who}! How are you doing?</div>
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
