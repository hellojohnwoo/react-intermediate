import React from 'react';
import './App.css';

function App3() {
  const name = undefined;

  // No Problem, rendering 'undefined' at Inside the JSX.
  return <div>{name || 'React'}</div>;
}

export default App3;

