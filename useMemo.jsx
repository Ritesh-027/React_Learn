import React, { useState, useMemo } from 'react';

// Practice of useMemo hook
function MyComponent() {
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    console.log('Calculating double...');
    return number * 2;
  }, [number]); //Dependency

  return (
    <div>
      <p>Number: {number}</p>
      <p>Double: {doubleNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
}
