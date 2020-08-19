import React, { useState } from 'react';
 
const EventPractice2 = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');

  // const onChangeUsername = e =>  setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);
  
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : ' + message);
    // setUsername('');
    // setMessage('');
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  
  return (
    <div>
      <h1>EventPractice2</h1>
      <input
        type="text"
        name="username"
        placeholder="UserName"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      / >
      <input
        type="text"
        name="message"
        placeholder="Input the text"
        value={message}
        // onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>ok</button>
    </div>
  )
}
export default EventPractice2;