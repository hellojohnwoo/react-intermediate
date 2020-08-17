import React from 'react';

const MyComponent = props => {
  const { name, children } = props;

  return (
    <div>
      hi, this component name is {name} <br />
      children value is {children}
    </div>
  );
};

// # defaultProps
MyComponent.defaultProps = {
  name: 'default Name'
}

export default MyComponent;


// デストラクタリング(非構造化/構造の分解)