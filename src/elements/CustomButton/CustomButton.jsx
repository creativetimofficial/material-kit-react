import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';

class CustomButton extends Component {
  render() {
    const { round, link, floating, justIcon, ...rest } = this.props;

    const btnClasses = cx({
      'btn-round': round,
      'btn-simple': link,
      'btn-just-icon': justIcon,
      'btn-fab btn-fab-mini': floating,
    });

    return (
      <Button
        className={btnClasses}
        {...rest}
      />
    );
  }
}

CustomButton.propTypes = {
  round: PropTypes.bool,
  link: PropTypes.bool,
  floating: PropTypes.bool,
  justIcon: PropTypes.bool,
}

export default CustomButton;
