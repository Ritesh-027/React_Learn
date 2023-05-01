/*
Props can be any type of data, including strings, numbers, objects, and functions.
They can also be used to pass event handlers and other functions from a parent component to a child component.
*/

// Child Component
import React from 'react';

const MyComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default MyComponent;

// Parent Component

import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="John" />;
};

// export default App;

