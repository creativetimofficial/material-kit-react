import React, {Component} from 'react';
import {
	Grid, Row, Col,
	Navbar, Nav, NavItem, NavDropdown, MenuItem,
} from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';
import 'css/demo.css';

addStyle(Navbar, 'info', 'primary', 'success', 'transparent', 'danger', 'warning');

class Home extends Component {
	render() {
		return (
			<div className="index-page">
				<div className="header header-filter" style={{ height: '90vh' }}>
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-offset-2">
								<div className="brand">
									<h1>Material Kit.</h1>
									<h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
								</div>
							</div>
						</div>

					</div>
				</div>

	      <div className="main main-raised">
	        <div className="section section-basic">
	          <Grid>
	            <div className="title">
	              <h2>Basic Elements</h2>
	            </div>

	            <div id="buttons">
	              <div className="title">
	                <h3>Buttons <br />
	                  <small>Pick your style</small>
	                </h3>
	              </div>

	              <Row>
	                <Col md={8} mdOffset={2}>
	                  <Button bsStyle="primary">Default</Button>
	                  <Button bsStyle="primary" round>Round</Button>
	                  <Button bsStyle="primary" round>
	                    <i className="material-icons">favorite</i> With Icon
	                  </Button>
	                  <Button bsStyle="primary" round floating>
	                    <i className="material-icons">favorite</i>
	                  </Button>
	                  <Button bsStyle="primary" link>Simple</Button>
	                </Col>
	              </Row>

	              <div className="title">
	                <h3><small>Pick your size</small></h3>
	              </div>

	              <Row>
	                <Col md={8} mdOffset={2}>
	                  <Button bsStyle="primary" bsSize="xsmall">x-Small</Button>
	                  <Button bsStyle="primary" bsSize="small">Small</Button>
	                  <Button bsStyle="primary">Small</Button>
	                  <Button bsStyle="primary" bsSize="large">Large</Button>
	                </Col>
	              </Row>

	              <div className="title">
	                <h3><small> Pick your color </small></h3>
	              </div>
	              <Row>
	                <Col md={8} mdOffset={2}>
	                  <Button>Default</Button>
	                  <Button bsStyle="primary">Primary</Button>
	                  <Button bsStyle="info">Info</Button>
	                  <Button bsStyle="success">Success</Button>
	                  <Button bsStyle="warning">Warning</Button>
	                  <Button bsStyle="danger">Danger</Button>
	                </Col>
	              </Row>

	              <div className="title">
	                <h3>Links</h3>
	              </div>
	              <Row>
	                <Col md={8} mdOffset={2}>
	                  <Button href="#" link>Default</Button>
	                  <Button bsStyle="primary" href="#" link>Primary</Button>
	                  <Button bsStyle="info" href="#" link>Info</Button>
	                  <Button bsStyle="success" href="#" link>Success</Button>
	                  <Button bsStyle="warning" href="#" link>Warning</Button>
	                  <Button bsStyle="danger" href="#" link>Danger</Button>
	                </Col>
	              </Row>
	            </div>

							<div id="inputs">
								<div className="title">
									<h3>Inputs</h3>
								</div>

								<Row>
									<Col sm={3}>
										<Input
											type="text"
											placeholder="Regular"
										/>
									</Col>

									<Col sm={3}>
										<Input
											type="email"
											label="With Floating Label"
										/>
									</Col>

									<Col sm={3}>
										<Input
											type="email"
											label="Success input"
											state="success"
											value="Success"
											feedbackIcon={<i className="material-icons">done</i>}
										/>
									</Col>

									<Col sm={3}>
										<Input
											type="email"
											label="Error input"
											state="error"
											value="Error Input"
											feedbackIcon={<i className="material-icons">clear</i>}
										/>
									</Col>

									<Col sm={3}>
										<Input
											type="text"
											placeholder="With Material Icons"
											addonIcon={<i className="material-icons">group</i>}
										/>
									</Col>

									<Col sm={3}>
										<Input
											type="text"
											placeholder="With Font Awesome Icons"
											addonIcon={<i className="fa fa-group"></i>}
										/>
									</Col>
								</Row>
							</div>

	          </Grid>
	        </div>

					<div className="section section-navbars">
						<Grid id="menu-dropdown">
							<Row>
								<Col md={6}>
									<div className="title">
										<h3>Menu</h3>
									</div>

									<Navbar collapseOnSelect fluid>
								    <Navbar.Header>
											<Navbar.Toggle />
								      <Navbar.Brand>
								        <a href="#pablo">Menu</a>
								      </Navbar.Brand>
								    </Navbar.Header>
										<Navbar.Collapse>
									    <Nav activeKey={1}>
									      <NavItem eventKey={1} href="#">Link</NavItem>
									      <NavItem eventKey={2} href="#">Link</NavItem>
									      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" pullRight>
													<MenuItem header>Dropdown header</MenuItem>
									        <MenuItem eventKey={3.1}>Action</MenuItem>
									        <MenuItem eventKey={3.2}>Another action</MenuItem>
									        <MenuItem eventKey={3.3}>Something else here</MenuItem>
									        <MenuItem divider />
									        <MenuItem eventKey={3.4}>Separated link</MenuItem>
									        <MenuItem divider />
									        <MenuItem eventKey={3.5}>One more separated link</MenuItem>
									      </NavDropdown>
									    </Nav>
										</Navbar.Collapse>
								  </Navbar>
								</Col>
								<Col md={6}>
									<div className="title">
										<h3>Menu with Icons</h3>
									</div>

									<Navbar bsStyle="info" fluid>
								    <Navbar.Header>
											<Navbar.Toggle />
								      <Navbar.Brand>
								        <a href="#pablo">Icons</a>
								      </Navbar.Brand>
								    </Navbar.Header>
										<Navbar.Collapse>
											<Nav pullRight>
												<NavItem eventKey={1} href="#"><i className="material-icons">email</i></NavItem>
												<NavItem eventKey={2} href="#"><i className="material-icons">face</i></NavItem>
												<NavDropdown eventKey={3} title={<i className="material-icons">settings</i>} id="dropdown-icons" pullRight>
													<MenuItem header>Dropdown header</MenuItem>
													<MenuItem eventKey={3.1}>Action</MenuItem>
													<MenuItem eventKey={3.2}>Another action</MenuItem>
													<MenuItem eventKey={3.3}>Something else here</MenuItem>
													<MenuItem divider />
													<MenuItem eventKey={3.4}>Separated link</MenuItem>
													<MenuItem divider />
													<MenuItem eventKey={3.5}>One more separated link</MenuItem>
												</NavDropdown>
											</Nav>
										</Navbar.Collapse>
								  </Navbar>
								</Col>
							</Row>

							<div className="title">
								<h3>Navigation</h3>
							</div>
						</Grid>

						<div id="navbar">
							<div className="navigation-example">
								<Navbar bsStyle="primary">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Primary Color</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav activeKey={1} pullRight>
											<NavItem eventKey={1} href="#"><i className="material-icons">explore</i> Discover</NavItem>
											<NavItem eventKey={2} href="#"><i className="material-icons">account_circle</i> Profile</NavItem>
											<NavItem eventKey={3} href="#"><i className="material-icons">settings</i> Settings</NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>


								<Navbar bsStyle="info">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Info Color</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav activeKey={1} pullRight>
											<NavItem eventKey={1} href="#">Discover</NavItem>
											<NavItem eventKey={2} href="#">Profile</NavItem>
											<NavItem eventKey={3} href="#">Settings</NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>


								<Navbar bsStyle="success">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Success Color</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav activeKey={1} pullRight>
											<NavItem eventKey={1} href="#"><i className="material-icons">explore</i></NavItem>
											<NavItem eventKey={2} href="#"><i className="material-icons">account_circle</i></NavItem>
											<NavItem eventKey={3} href="#"><i className="material-icons">settings</i></NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>


								<Navbar bsStyle="warning">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Warning Color</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav pullRight>
											<NavItem eventKey={1} href="#"><i className="fa fa-facebook-square"></i></NavItem>
											<NavItem eventKey={2} href="#"><i className="fa fa-twitter"></i></NavItem>
											<NavItem eventKey={3} href="#"><i className="fa fa-google-plus"></i></NavItem>
											<NavItem eventKey={4} href="#"><i className="fa fa-instagram"></i></NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>


								<Navbar bsStyle="danger">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Danger Color</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav pullRight>
											<NavItem eventKey={1} href="#"><i className="fa fa-facebook-square"></i> Share</NavItem>
											<NavItem eventKey={2} href="#"><i className="fa fa-twitter"></i> Tweet</NavItem>
											<NavItem eventKey={3} href="#"><i className="fa fa-pinterest"></i> Pin</NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>


								<Navbar bsStyle="transparent">
									<Navbar.Header>
										<Navbar.Toggle />
										<Navbar.Brand>
											<a href="#pablo">Transparent</a>
										</Navbar.Brand>
									</Navbar.Header>
									<Navbar.Collapse>
										<Nav pullRight>
											<NavItem eventKey={1} href="#"><i className="fa fa-facebook-square"></i> Facebook</NavItem>
											<NavItem eventKey={2} href="#"><i className="fa fa-twitter"></i> Twitter</NavItem>
											<NavItem eventKey={3} href="#"><i className="fa fa-instagram"></i> Instagram</NavItem>
										</Nav>
									</Navbar.Collapse>
								</Navbar>
							</div>
						</div>
					</div>

	      </div>{/* main */}
			</div>
		);
	}
}

export default Home;
