import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
  const { name, children } = props;

  return (
    <div>
      hi, this component name is {name} <br />
      children value is {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'default Name'
}

// # 
MyComponent.propTypes = {
  name: PropTypes.string
};

export default MyComponent;


// デストラクタリング(非構造化/構造の分解)