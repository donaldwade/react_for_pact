import React from 'react';
import ReactDOM from 'react-dom';

import makeRequest from './helpers';

const myFunction = () => {
  console.log("Hello");
  makeRequest('http://echo.jsontest.com');
};

export const NewComponent = (props) => (
  <h1>Hello there { props.name }</h1>
)

export const Button = (props) => (
  <button
    onClick={props.onclick}
 >
    { props.buttonText }
  </button>
)

export default Button;
