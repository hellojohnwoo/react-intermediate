import React from 'react';

const IterationSample = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];

  // const nameList = names.map(name => <li>{name}</li>);
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <ul>{nameList}</ul>
  );
};
export default IterationSample;