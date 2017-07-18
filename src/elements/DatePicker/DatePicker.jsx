import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayPicker from 'react-day-picker';

const DAY_FORMAT = 'MM/DD/YYYY';

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: !props.value,
      isFocused: false,
      isOpen: false,
      selectedDay: props.selectedDay ? moment(props.selectedDay).format(DAY_FORMAT) : null,
    }
  }

  handleFocus = (event) => {
    this.setState({
      isFocused: true,
      isOpen: true,
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
      isOpen: false,
    });
  };

  renderFormControl() {
    const { placeholder } = this.props;
    return (
      <FormControl
        type="text"
        value={this.state.selectedDay ? moment(this.state.selectedDay).format(DAY_FORMAT) : null}
        placeholder={placeholder ? placeholder : "Pick a date"}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }

  render() {
    const { label, feedbackIcon, state } = this.props;

    const cnInput = cx({
      'label-floating': true,
      'is-empty': false,
      'is-focused': this.state.isFocused,
    });
    const cnDatepicker = cx({
      'datepicker': true,
      'dropdown-menu': true,
      'open': this.state.isOpen,
    });

    return (
      <div className="datepicker-container">
        <FormGroup validationState={state} className={cnInput}>
          {label && <ControlLabel>{label}</ControlLabel>}
          { this.renderFormControl() }
          <FormControl.Feedback>
            {feedbackIcon}
          </FormControl.Feedback>
        </FormGroup>

        <div className={cnDatepicker}>
          <DayPicker
            enableOutsideDays
            firstDayOfWeek={1}
            selectedDays={moment(this.state.selectedDay).toDate()}
            onDayClick={this.handleDayClick}
          />
        </div>
      </div>
    );
  }
}

Datepicker.propTypes = {
  label: PropTypes.string,
  feedbackIcon: PropTypes.node,
  selectedDay: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['success', 'warning', 'error', null]),
}

export default Datepicker;
