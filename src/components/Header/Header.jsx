import React, {Component} from 'react';
import cx from 'classnames';
import { Navbar, NavItem, Tooltip, Nav, OverlayTrigger } from 'react-bootstrap';

import logo from 'img/logo.png';

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
			navbarTransparent: true,
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
				navbarTransparent: scrollTop < 260,
			};
		});
	}

	render() {
		const tooltip = (
			<Tooltip id="tooltip"><b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b></Tooltip>
		);

		const navbarStyles = cx({
      'navbar-transparent': this.state.navbarTransparent,
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
								<div className="brand">
									Creative Tim
								</div>
							</div>
						</a>

				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="/components"><i className="material-icons">dashboard</i> Components</NavItem>
						<NavItem eventKey={1} href="#"><i className="material-icons">cloud_download</i> Download</NavItem>
						<NavItem eventKey={2} href="#"><i className="fa fa-twitter"></i></NavItem>
						<NavItem eventKey={1} href="#"><i className="fa fa-facebook-square"></i></NavItem>
						<NavItem eventKey={3} href="#"><i className="fa fa-instagram"></i></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
