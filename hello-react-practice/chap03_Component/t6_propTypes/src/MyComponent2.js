import React from 'react';
import PropTypes from 'prop-types';

const MyComponent2 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      hi, this component name is {name} <br />
      children value is {children} <br />
      my favorite number is {favoriteNumber}
    </div>
  );
};

MyComponent2.defaultProps = {
  name: 'default Name'
}

// # .isRequired
MyComponent2.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent2;


// デストラクタリング(非構造化/構造の分解)

// https://github.com/facebook/prop-types