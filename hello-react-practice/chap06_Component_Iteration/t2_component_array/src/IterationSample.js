import React from 'react';

const IterationSample = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];
  const nameList = names.map(name => <li>{name}</li>);
                         // (function(name) { }

  return (
    <ul>{nameList}</ul>
  );
};
export default IterationSample;


// const IterationSample = () => {
//   return (
//     <ul>
//       <li>snowman</li>
//       <li>ice</li>
//       <li>snow</li>
//       <li>wind</li>
//     </ul>
//   );
// };