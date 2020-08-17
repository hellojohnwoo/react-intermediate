import React from 'react';

// const MyComponent2 = props => {
//   const { name, children } = props;

const MyComponent2 = ({ name, children }) => {
  return (
    <div>
      hi, this component name is {name} <br />
      children value is {children}
    </div>
  );
};

// # defaultProps
MyComponent2.defaultProps = {
  name: 'default Name'
}

export default MyComponent2;


// デストラクタリング(非構造化/構造の分解)