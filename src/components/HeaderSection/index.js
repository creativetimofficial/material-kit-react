import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderSection extends Component {
  render() {
    const { backgroundImage } = this.props;
    return (
      <div
        className="header header-filter"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      />
    );
  }
}

HeaderSection.propTypes = {
  backgroundImage: PropTypes.string
};
