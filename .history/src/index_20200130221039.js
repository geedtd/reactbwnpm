import { sum, multiply } from "./components/utils"
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

console.log(sum(2, 5));
console.log(multiply(2,5));
document.getElementById('app').innerHTML = `
<h1>Hello</h1>
<div>
Typing away
</div>
`
