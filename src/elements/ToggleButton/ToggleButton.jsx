import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class CustomCheckbox extends Component {
  render() {
    const { ...rest } = this.props;

    return (
      <Checkbox
        bsClass="togglebutton"
        {...rest}
      >
        <span className="toggle"></span>
        {this.props.children}
      </Checkbox>
    );
  }
}

export default CustomCheckbox;
