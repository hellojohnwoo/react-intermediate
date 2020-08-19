import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log('rendering is done');
    console.log({
      name,
      nickname
    });
  });

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
