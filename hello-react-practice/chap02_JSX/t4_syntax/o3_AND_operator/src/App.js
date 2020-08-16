import React from 'react';

function App() {
  const name = 'React';

  return (
    <div>
      {name === 'React' ? <h1>React</h1> : null}
    </div>
  );
}
export default App;