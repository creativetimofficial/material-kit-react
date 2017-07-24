import React, { Component } from 'react';
import cx from 'classnames';
import { Navbar, NavItem, Tooltip, Nav, OverlayTrigger } from 'react-bootstrap';

import { MdDashboard, MdCloudDownload } from 'react-icons/lib/md';
import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/lib/fa';

import logo from 'img/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarTransparent: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    this.setState(() => {
      return {
        navbarTransparent: scrollTop < 260
      };
    });
  };

  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <b>Material Kit</b> was Designed & Coded with care by the staff from{' '}
        <b>Creative Tim</b>
      </Tooltip>
    );

    const navbarStyles = cx({
      'navbar-transparent': this.state.navbarTransparent
    });

    return (
      <Navbar bsStyle="primary" fixedTop className={navbarStyles}>
        <Navbar.Header>
          <Navbar.Toggle />
          <a href="http://www.creative-tim.com">
            <div className="logo-container">
              <div className="logo">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={logo} alt="Creative Tim Logo" />
                </OverlayTrigger>
              </div>
              <div className="brand">Creative Tim</div>
            </div>
          </a>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/components">
              <MdDashboard size={20} /> Components
            </NavItem>
            <NavItem eventKey={1} href="#">
              <MdCloudDownload size={20} /> Download
            </NavItem>
            <NavItem eventKey={2} href="#">
              <FaTwitter size={20} />
            </NavItem>
            <NavItem eventKey={1} href="#">
              <FaFacebookSquare size={20} />
            </NavItem>
            <NavItem eventKey={3} href="#">
              <FaInstagram size={20} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
