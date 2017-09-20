import React from 'react';
import ReactDOM from 'react-dom';
import makeRequest from './helpers';
import { hitGoEndpoint } from './helpers';

import Button from './Button';
import { NewComponent } from './Button';

const makeAPIRequest = () => {
  console.log("hello from test function");
  makeRequest('http://echo.jsontest.com');
  hitGoEndpoint('http://localhost:1323');
}

export const App = () => (
  <div>
    <h1>Hello, world!</h1>
    <NewComponent
      name="from New component"
    />
    <Button
      onclick={ makeAPIRequest }
      buttonText="Click me"
    />
  </div>
);

export default App;

