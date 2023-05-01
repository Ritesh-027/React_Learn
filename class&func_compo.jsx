
// Class component

/*
A class component must include the extends React.Component statement. 
This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.
*/
import React, { Component } from 'react';
class MyComponent extends Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
export default MyComponent;

// Functional component
/*
A Function component also returns HTML,and behaves much the same way as a Class component, 
but Function components can be written using much less code, are easier to understand.
*/

const MyComponent = () => {
  return <h1>Hello, world!</h1>;
};

// export default MyComponent;


