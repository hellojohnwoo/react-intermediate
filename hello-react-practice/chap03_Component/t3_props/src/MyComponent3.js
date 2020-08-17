import React from 'react';


// # .children : Show the contents between 'Component tag'
const MyComponent3 = props => {
  return (
    <div>
      This component name is {props.name}<br />
      children value is {props.children}
    </div>
  );
};

// # defaultProps
MyComponent3.defaultProps = {
  name: 'default Name'
}

export default MyComponent3;


