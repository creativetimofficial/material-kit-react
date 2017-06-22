import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isEmpty: props.value ? false : true,
      isFocused: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      isEmpty: event.target.value.length === 0,
    });
  }
  handleFocus = (event) => {
    this.setState({
      isFocused: true,
    });
  }
  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  renderFormControl() {
    const { type, placeholder } = this.props;
    return (
      <FormControl
        type={type}
        value={this.state.value}
        placeholder={placeholder}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }

  render() {
    const { label, feedbackIcon, state, addonIcon } = this.props;

    const cnInput = cx({
      'label-floating': true,
      'is-empty': this.state.isEmpty,
      'is-focused': this.state.isFocused,
    });

    // Input with Addon Icon
    if (addonIcon) {
      return (
        <FormGroup validationState={state} className={cnInput}>
          <InputGroup>
            <InputGroup.Addon>{addonIcon}</InputGroup.Addon>
            { this.renderFormControl() }
          </InputGroup>
          <FormControl.Feedback>
            {feedbackIcon}
          </FormControl.Feedback>
        </FormGroup>
      );
    }

    // Input without Addon Icon
    return (
      <FormGroup validationState={state} className={cnInput}>
        {label && <ControlLabel>{label}</ControlLabel>}
        { this.renderFormControl() }
        <FormControl.Feedback>
          {feedbackIcon}
        </FormControl.Feedback>
      </FormGroup>
    );
  }
}

CustomInput.propTypes = {
  label: PropTypes.string,
  feedbackIcon: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  addonIcon: PropTypes.node,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['success', 'warning', 'error', null]),
}

export default CustomInput;
