import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log(name)
  // }, [name])

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };  
  }); 
// }, []);    // if want to call cleanup function, set '[]'(Empty Array) 

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={name} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>Name : </b> {name}
        </div>
        <div>
          <b>NickName : </b> {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
