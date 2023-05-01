import React, { useState, useCallback } from 'react';

// Practice of useCallback hook
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}
