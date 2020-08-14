import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'SnowMan'},
    { id: 2, text: 'Ice'},
    { id: 3, text: 'Snow'},
    { id: 4, text: 'Wind'},
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return <ul>{namesList}</ul>;
};
 
export default IterationSample;