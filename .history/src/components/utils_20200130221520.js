import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export function sum ( a, b) {
    return  a + b;
};

export function multiply ( a , b ) {
    return a * b;
}
export const proffesion = "web dev";

export default function() { 
    return 'Hello from the utils module';
}