import React, { useRef } from 'react';

// Practice of useRef hook
function MyComponent() {
    // Storing useRef object 
  const inputRef = useRef(null);

//   function for click
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
