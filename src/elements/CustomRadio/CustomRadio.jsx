import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';

class CustomRadio extends Component {
  render() {
    const { ...rest } = this.props;

    return (
      <Radio
        {...rest}
      >
        <span className="circle"></span><span className="check"></span>
        {this.props.children}
      </Radio>    
    );
  }
}

export default CustomRadio;
