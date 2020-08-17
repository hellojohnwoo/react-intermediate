import React from 'react';
import MyComponent from './MyComponent';
 
const App = () => {
  // return <MyComponent name={3}>children React</MyComponent>;   // Error in Console tap of Chrome Dev Tool
  return <MyComponent name="React">children React</MyComponent>;
};
 
export default App;