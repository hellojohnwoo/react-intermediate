import React from 'react';

function App() {
  const name = 'inline-styling';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', 
    fontWeight: 'bold',
    padding: 16
  };

  return <div style={style}>{name}</div>;
}
export default App;

