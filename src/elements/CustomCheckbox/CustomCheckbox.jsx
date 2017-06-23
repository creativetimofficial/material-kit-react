import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class CustomCheckbox extends Component {
  render() {
    const { ...rest } = this.props;

    return (
      <Checkbox
        {...rest}
      >
        <span className="checkbox-material"><span className="check"></span></span>
        {this.props.children}
      </Checkbox>
    );
  }
}

export default CustomCheckbox;
