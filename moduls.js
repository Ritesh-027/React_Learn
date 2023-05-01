// With the export and import keyword we can make our code base simple and clean

// Export keyword
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};
// export default MyComponent;
// import keyword
// App.js
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};
export default App;
