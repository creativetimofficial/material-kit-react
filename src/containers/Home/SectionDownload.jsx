import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton';

class SectionDownload extends Component {
	render() {
		return (
			<div className="section section-download">
				<Grid>
					<Row className="text-center">
						<Col md={8} mdOffset={2}>
							<h2>Do you love this UI Kit?</h2>
							<h4>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the kit. Start a new project or give an old Bootstrap project a new look!</h4>
						</Col>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4}>
							<Button bsStyle="primary" bsSize="lg" href="http://www.creative-tim.com/product/material-kit" target="_blank">
								<i className="material-icons">cloud_download</i> Free Download
							</Button>
						</Col>
					</Row>

					<br /><br />

					<Row className="text-center">
						<Col md={8} mdOffset={2}>
							<h2>Want more?</h2>
							<h4>We've just launched <a href="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" rel="noopener noreferrer" target="_blank">Material Kit PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap UI Kit inspired by Material Design.</h4>
						</Col>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4}>
							<Button bsStyle="upgrade" bsSize="lg" target="_blank" href="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie">
								<i className="material-icons">unarchive</i> Upgrade to PRO
							</Button>
						</Col>
					</Row>

					<Row className="sharing-area">
						<h3>Thank you for supporting us!</h3>

						<Button bsStyle="twitter">
							<i className="fa fa-twitter"></i> Tweet
						</Button>
						<Button bsStyle="facebook">
							<i className="fa fa-facebook-square"></i> Share
						</Button>
						<Button bsStyle="google-plus">
							<i className="fa fa-google-plus"></i> Share
						</Button>
						<Button bsStyle="github">
							<i className="fa fa-github"></i> Star
						</Button>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default SectionDownload;
