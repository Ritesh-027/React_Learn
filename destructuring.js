
// Destructuring method in react js
const age = [23, 24, 25];
const [Ritesh, Jay, Suraj] = age;

// Ex of Destructuring

/*
MyComponent that accept an object as its argument, 
which contains three properties: name, age, and hobbies. 
Instead of accessing these properties using the props object and dot notation, 
we use destructuring to extract them directly and assign them to variables with the same names.
*/
import React from 'react';

const MyComponent = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
