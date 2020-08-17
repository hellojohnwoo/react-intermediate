import React from 'react';

const MyComponent2 = props => {
  return <div>This component name is {props.name}</div>;
};

// # defaultProps
MyComponent2.defaultProps = {
  name: 'default Name'
}

export default MyComponent2;


