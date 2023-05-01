import React from 'react';

// Rendering using if-else.
const ConRen = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome, user!</h1>;
  } else {
    return <button>Log in</button>;
  }
};
export default ConRen;


// Rendering using Ternery-Operator.
const MyTerny = ({ count}) => {
  return (
    <div>
      {count > 0 ? (<p>There are {count} items.</p>) : (<p>There are no items.</p>
      )}
    </div>
  );
};
export default MyTerny;



