import React from 'react';

function App() {
  const name = 'React';

  return (
    <div>
      {name === 'React' ? (<h1>React</h1>) : (<h2>Not React</h2>)}
    </div>
  );
}
export default App;