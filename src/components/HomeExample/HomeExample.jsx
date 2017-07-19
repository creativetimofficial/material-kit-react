import React, {Component} from 'react';

import {
	Grid, Row, Col,
  Image,
} from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';
import bg from 'img/city.jpg';
import landing from 'img/landing.jpg';
import profile from 'img/profile.jpg';

const styleSignup = {
	backgroundImage: `url('${bg}')`,
	backgroundSize: 'cover',
	backgroundPosition: 'top center',
	minHeight: '700px',
};

class HomeExample extends Component {
	render() {
		return (
			<div>
				<div className="section">
					<Grid>
						<Row>
							<Col md={8} mdOffset={2} className="text-center">
								<h2>Completed with examples</h2>
								<h4>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</h4>
							</Col>
						</Row>
					</Grid>
				</div>

				<div className="section section-full-screen section-signup" style={styleSignup}>
					<Grid>
						<Row>
							<Col md={4} mdOffset={4}>
								<div className="card card-signup">
									<form className="form">
										<div className="header header-primary text-center">
											<h4>Sign Up</h4>
											<div className="social-line">
												<Button href="#pablo" justIcon link>
													<i className="fa fa-facebook-square"></i>
												</Button>
												<Button href="#pablo" justIcon link>
													<i className="fa fa-twitter"></i>
												</Button>
												<Button href="#pablo" justIcon link>
													<i className="fa fa-google-plus"></i>
												</Button>
											</div>
										</div>
										<p className="text-divider">Or Be Classical</p>

										<div className="content">
											<Input
												type="text"
												placeholder="First Name..."
												addonIcon={<i className="material-icons">face</i>}
											/>
											<Input
												type="email"
												placeholder="Email..."
												addonIcon={<i className="material-icons">email</i>}
											/>
											<Input
												type="password"
												placeholder="Password..."
												addonIcon={<i className="material-icons">lock_outline</i>}
											/>
										</div>
										<div className="footer text-center">
											<Button bsStyle="primary" bsSize="large" link>Get Started</Button>
										</div>
									</form>
								</div>

							</Col>
						</Row>
					</Grid>
				</div>
				<div className="text-center">
					<Button href="/signup" bsStyle="primary" bsSize="large" link>View Signup Page</Button>
				</div>

				<div className="section section-examples">
					<Grid fluid className="text-center">
						<Row>
							<Col md={6}>
								<a href="/landing" target="_blank">
									<Image src={landing} rounded responsive className="img-raised" />
								</a>
								<Button href="/landing" bsStyle="primary" bsSize="large" link>View Landing Page</Button>
							</Col>
							<Col md={6}>
								<a href="/profile" target="_blank">
									<Image src={profile} rounded responsive className="img-raised" />
								</a>
								<Button href="/profile" bsStyle="primary" bsSize="large" link>View Profile Page</Button>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default HomeExample;
