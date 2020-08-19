import React from 'react';

const IterationSample2 = () => {
  // const namesArr = ['snowman', 'ice', 'snow', 'wind'];
  const [names, setNames] = useState([
    { id: 1, text: 'snowman'},
    { id: 2, text: 'ice'},
    { id: 3, text: 'snow'},
    { id: 4, text: 'wind'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);        // for New Id

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  // const nameList = namesArr.map((name, index) => <li key={index}>{name}</li>);

  return (
    <ul>{nameList}</ul>
  );
};
export default IterationSample2;