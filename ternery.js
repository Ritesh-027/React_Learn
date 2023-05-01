import React from "react";
import MyComponent from "./MyComponent";

// Component 1
// Render a component
const App = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <MyComponent /> : <p>Please log in to continue.</p>}
    </div>
  );
};

export default App;
// Component 2
// Render a styles or props
const myC = ({ isImportant }) => {
  const style = {
    fontWeight: isImportant ? "bold" : "normal",
  };
  return <p style={style}>Hello, world!</p>;
};
// export default myC;
