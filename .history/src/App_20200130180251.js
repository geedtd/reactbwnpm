import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Button } from 'reactstrap';
import './App.css';






export default function App() {
  return React.createElement("div", {id:'greet'}, 'Hello');
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  React.createElement(App),
   rootElement
   );