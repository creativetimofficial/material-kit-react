import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Flag extends Component {
  render() {
    const { img } = this.props;
    return <img src={require(`img/flags/${img}.png`)} alt={img} />;
  }
}

Flag.propTypes = {
  img: PropTypes.string.isRequired
};

export default Flag;
