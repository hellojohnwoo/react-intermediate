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

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = name.concat({   // Don't use '.push'
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button> 
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;