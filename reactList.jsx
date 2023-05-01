import React from 'react';
import MyList from './MyList';


// Rendering list from an array of items.
const MyList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default MyList;

// we can pass an array of items to it as a props.

const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <MyList items={items} />;
};

export default App;



