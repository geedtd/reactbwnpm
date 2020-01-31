//import { sithGreeting } from "./components/utils"
import React from 'react';
import ReactDOM from 'react-dom';


const siths = [{name: 'Darth Vader'}, {name: 'Palpatine'}];

function App({ friends }) {
    return (
        <>
            <Greeter who={friends[0].name} />
            <Greeter who={friends[1].name} />
            <ThingEnumerator thing='pals' count={friends.length * 3} />
        </>
    );
}

function Greeter(props) {
    const { who } = props;
    return <div>Hello, {who}! How are you doing?</div>
}
function ThingEnumerator(props) { 
    const { thing, count } = props;
    return <h3>I have {count} {thing} !</h3>
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
