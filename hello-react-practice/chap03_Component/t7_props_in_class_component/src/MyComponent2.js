import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = props => {
//   const { name, children } = props;

class MyComponent2 extends Component {
  
  static defaultProps = {
    name: 'default Name'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

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

export default MyComponent2;