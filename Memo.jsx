import React, { useState, memo } from 'react';

const MemoComponent = ({ propA }) => {
  console.log('Rendering MyComponent');
  return (
    <div>
      <h1>{propA}</h1>
    </div>
  );
};

const MemoizedComponent = memo(MemoComponent);

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
      <MemoizedComponent propA={count} />
    </div>
  );
};

export default App;
