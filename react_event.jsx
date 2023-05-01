import React, { useState } from 'react';

// Ex of onclick event.
const MyClick = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default MyClick;

// Ex 2 - onChange event
const MyComponent = () => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Entered value is : {value}</p>
    </div>
  );
};

export default MyComponent;
