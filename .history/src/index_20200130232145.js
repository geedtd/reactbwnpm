//import { sithGreeting } from "./components/utils"
import React from 'react';
import ReactDOM from 'react-dom';

const GrandChild = props => {
    return (
        <div>
            <h3>Grandchild: {props.personData.grandChildName}</h3>
        </div>
    )
}
const Child = props => {
    return (
        <div>
            <h2>Child: {props.personData.childName}</h2>
            <GrandChild personData={props.personData}/>
        </div>
    )
}

const Parent = props => {
    return (
        <div>
            <h1>Parent: {props.personData.parentName}</h1>
            <Child personData={props.personData} />
        </div>
    )
};

const App = () => {
    const personData = {
        parentName: 'Gilbert',
        childName: 'Regina',
        grandChildName: 'Ryan'
    }
    return (
        <div>
            <Parent personData={personData} />
        </div>
    );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)




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
