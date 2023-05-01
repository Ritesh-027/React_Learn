import React, { useContext } from 'react';
// Practice of useContext Hook {No need prop drilling to pass the value from parent to child}
const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);
  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
}
// all the childern can access this value if need.
function MyContextProvider(props) {
  return (
    <MyContext.Provider value="Hello World">
      {props.children}
    </MyContext.Provider>
  );
}
