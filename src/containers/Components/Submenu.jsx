import React, { Component } from 'react';
import cx from 'classnames';
import _debounce from 'lodash/debounce';

class Submenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _debounce(this.handleScroll, 10));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _debounce(this.handleScroll, 10));
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    this.setState(() => {
      return {
        fixed: scrollTop > 340
      };
    });
  };

  render() {
    const cnSubmenu = cx({
      'fixed-section': true,
      affix: this.state.fixed
    });
    return (
      <div className={cnSubmenu}>
        <ul>
          <li>
            <a href="#buttons-row">Buttons</a>
          </li>
          <li>
            <a href="#checkbox-row">Checkbox/Radio/Toggle</a>
          </li>
          <li>
            <a href="#dropdown-row">Dropdown</a>
          </li>
          <li>
            <a href="#inputs-row">Inputs</a>
          </li>
          <li>
            <a href="#textarea-row">Textarea</a>
          </li>
          <li>
            <a href="#navbar-row">Navigation</a>
          </li>
          <li>
            <a href="#pagination-row">Pagination</a>
          </li>
          <li>
            <a href="#progressbar-row">Progress Bars</a>
          </li>
          <li>
            <a href="#sliders-row">Sliders</a>
          </li>
          <li>
            <a href="#labels-row">Labels</a>
          </li>
          <li>
            <a href="#tables-row">Tables</a>
          </li>
          <li>
            <a href="#datepicker-row">Datepicker</a>
          </li>
          <li>
            <a href="#modal-row">Modals</a>
          </li>
          <li>
            <a href="#tooltip-row">Tooltips/Popovers</a>
          </li>
          <li>
            <a href="#icons-row">Material Icons</a>
          </li>
          <li>
            <a href="#notification-row">Notifications</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Submenu;
