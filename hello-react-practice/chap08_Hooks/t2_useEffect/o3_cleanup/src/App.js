import React, { useState } from 'react';
import Info from './Info';
 
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
      onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? 'unvisible' : 'visible'}
      </button>
      <hr />
    {visible && <Info />}
    </div>
  );
};
 
export default App;