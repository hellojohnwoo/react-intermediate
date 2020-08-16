import React from 'react';
import './App.css';

function App() {
  const name = undefined;

  return (
    <div>
      {name || 'value is undefined'};
    </div>
  );
}
export default App;

