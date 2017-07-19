import React, {Component} from 'react';
import _debounce from 'lodash/debounce';
import { Grid, Row, Col } from 'react-bootstrap';
import bgHeader from 'img/bg2.jpeg';

class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
      bgTop: 0,
	  };
	}

	componentDidMount() {
	   window.addEventListener('scroll',  _debounce(this.handleScroll, 10));
	}

	componentWillUnmount() {
	   window.removeEventListener('scroll', _debounce(this.handleScroll, 10));
	}

	handleScroll = () => {
    const scrollTop = window.pageYOffset;
		this.setState(() => {
		  return {
				bgTop: scrollTop / 3,
			};
		});
	}

	render() {
		console.log(this.state.bgTop);
		const styleHeader = {
			backgroundImage: `url(${bgHeader})`,
			height: '90vh',
			transform: `translate(0, ${this.state.bgTop}px)`,
		};

		return (
			<div className="header header-filter" style={styleHeader}>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<div className="brand">
								<h1>Material Kit.</h1>
								<h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Header;
