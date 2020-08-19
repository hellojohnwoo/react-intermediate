import React, { useState } from 'react';
 
const EventPractice0 = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUsername = e =>  setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  
  const onClick = () => {
    alert(username + ' : ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  
  return (
    <div>
      <h1>EventPractice0</h1>
      <input
        type="text"
        name="username"
        placeholder="UserName"
        value={username}
        onChange={onChangeUsername}
      / >
      <input
        type="text"
        name="message"
        placeholder="Input the text"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>ok</button>
    </div>
  )
}
export default EventPractice0;