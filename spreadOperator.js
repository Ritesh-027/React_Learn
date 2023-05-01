import React from 'react';

// Combining 2 arrays using Spread Operator

const MyComponent = () => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  return (
    <div>
      <ul>
        {mergedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
