import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = props => {
//   const { name, children } = props;

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        hi, this component name is {name} <br />
        children value is {children} <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  };
}

MyComponent.defaultProps = {
  name: 'default Name'
}

// # 
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;


// デストラクタリング(非構造化/構造の分解)