import React, {Component} from 'react';
import _map from 'lodash/map';
import {
	Grid, Row, Col,
	Navbar, Nav, NavItem, NavDropdown, MenuItem,
	Tab,
	ProgressBar,
	Pagination,
	Label,
	Alert,
	Image,
	Modal,
	OverlayTrigger, Popover, Tooltip,
    Carousel,
} from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

import DatePicker from 'elements/DatePicker/DatePicker';
import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox';
import Radio from 'elements/CustomRadio/CustomRadio';
import ToggleButton from 'elements/ToggleButton/ToggleButton';
import Slider from 'elements/CustomSlider/CustomSlider';

import { popover, tooltip } from 'mock-data.js';
import avatar from 'img/avatar.jpg';
import slide1 from 'img/bg2.jpeg';
import slide2 from 'img/bg3.jpeg';
import slide3 from 'img/bg4.jpeg';

addStyle(Navbar, 'info', 'primary', 'success', 'transparent', 'danger', 'warning');
addStyle(Pagination, 'info', 'primary', 'success', 'danger', 'warning');

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      option1: false,
      option2: true,
      option3: false,
      option4: true,
			option5: 'value2',
			option6: 'value2',
			option7: true,
			option8: false,
			activePill: 2,
			showModal: false,
    };
	}

	handleCheckbox = (event) => {
		const target = event.target;
    this.setState({
      [target.name]: target.checked,
    });
  }

	handleRadio = (event) => {
		const target = event.target;
	  this.setState({
	    [target.name]: target.value,
	  });
	}

	handlePill = (key) => {
		this.setState(() => {
		  return {
				activePill: key,
			};
		});
	}

	handleModal = () => {
		this.setState((prevState) => {
		  return {
				showModal: !prevState.showModal,
			};
		});
	}

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

							<div className="space-70"></div>

							<div id="checkRadios">
								<Row>
									<Col sm={3}>
										<div className="title">
											<h3>Checkboxes</h3>
										</div>

										<Checkbox
											name="option1"
											checked={this.state.option1}
											onChange={this.handleCheckbox}
										>
								      Unchecked
								    </Checkbox>
										<Checkbox
											name="option2"
											checked={this.state.option2}
											onChange={this.handleCheckbox}
										>
								      Checked
								    </Checkbox>
										<Checkbox
											name="option3"
											disabled
											checked={this.state.option3}
										>
								      Disabled Unchecked
								    </Checkbox>
										<Checkbox
											name="option4"
											disabled
											checked={this.state.option4}
										>
								      Disabled Checked
								    </Checkbox>
									</Col>

									<Col sm={3}>
										<div className="title">
											<h3>Radio Buttons</h3>
										</div>

										<Radio
											name="option5"
											value="value1"
											checked={this.state.option5 === 'value1'}
											onChange={this.handleRadio}
										>
											Radio is off
										</Radio>
										<Radio
											name="option5"
											value="value2"
											checked={this.state.option5 === 'value2'}
											onChange={this.handleRadio}
										>
											Radio is on
										</Radio>
										<Radio
											name="option6"
											disabled
											checked={this.state.option6 === 'value1'}
										>
											Disabled Radio is off
										</Radio>
										<Radio
											name="option6"
											disabled
											checked={this.state.option6 === 'value2'}
										>
											Disabled Radio is on
										</Radio>
									</Col>

									<Col sm={3}>
										<div className="title">
											<h3>Toggle Buttons</h3>
										</div>

										<ToggleButton
											name="option7"
											checked={this.state.option7}
											onChange={this.handleCheckbox}
										>
											Toggle is on
										</ToggleButton>
										<ToggleButton
											name="option8"
											checked={this.state.option8}
											onChange={this.handleCheckbox}
										>
											Toggle is off
										</ToggleButton>
									</Col>

									<Col sm={3}>
										<div className="title">
											<h3>Sliders</h3>
										</div>

										<Slider
											range={{min: 0, max: 100}}
									    start={[20, 60]}
											connect={[false, true, false]}
											brand="primary"
										/>
										<Slider
											range={{min: 0, max: 100}}
									    start={[40]}
											connect={[true, false]}
											brand="warning"
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

					<div className="section section-tabs">
						<Grid>
							<Row>
								<Col md={6}>
									<div className="title">
										<h3>Tabs with Icons on Card</h3>
									</div>

									<Tab.Container id="tabs-icons" defaultActiveKey="first">
										<div className="card card-nav-tabs">

											<div className="header header-success">
												<div className="nav-tabs-navigation">
													<div className="nav-tabs-wrapper">
										        <Nav bsStyle="tabs">
										          <NavItem eventKey="first">
																<i className="material-icons">face</i>
																Profile
										          </NavItem>
										          <NavItem eventKey="second">
																<i className="material-icons">chat</i>
																Messages
										          </NavItem>
										          <NavItem eventKey="third">
																<i className="material-icons">build</i>
																Settings
										          </NavItem>
										        </Nav>
													</div>
												</div>
											</div>

											<div className="content">
								        <Tab.Content animation={false} className="text-center">
								          <Tab.Pane eventKey="first">
														<p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the
															level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
								          </Tab.Pane>
								          <Tab.Pane eventKey="second">
														<p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand
															culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
								          </Tab.Pane>
								          <Tab.Pane eventKey="third">
														<p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities.
															I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
								          </Tab.Pane>
								        </Tab.Content>
											</div>

										</div>
								  </Tab.Container>
								</Col>

								<Col md={6}>
									<div className="title">
										<h3>Tabs on Plain Card</h3>
									</div>

									<Tab.Container id="tabs-plain" defaultActiveKey="home">
										<div className="card card-nav-tabs card-plain">

											<div className="header header-danger">
												<div className="nav-tabs-navigation">
													<div className="nav-tabs-wrapper">
										        <Nav bsStyle="tabs">
										          <NavItem eventKey="home">Home</NavItem>
										          <NavItem eventKey="updates">Updates</NavItem>
										          <NavItem eventKey="history">History</NavItem>
										        </Nav>
													</div>
												</div>
											</div>

											<div className="content">
								        <Tab.Content animation={false} className="text-center">
								          <Tab.Pane eventKey="home">
														<p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities.
															I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
								          </Tab.Pane>
								          <Tab.Pane eventKey="updates">
														<p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the
															level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
								          </Tab.Pane>
								          <Tab.Pane eventKey="history">
														<p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand
															culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
								          </Tab.Pane>
								        </Tab.Content>
											</div>

										</div>
								  </Tab.Container>
								</Col>

							</Row>
						</Grid>
					</div>

					<div className="section section-pagination">
						<Grid>
							<Row>
								<Col md={6}>
									<div className="title">
										<h3>Progress Bars</h3>
									</div>

									<ProgressBar now={30} className="progress-line-primary" />

									<ProgressBar bsStyle="info" now={60} className="progress-line-info" />

									<ProgressBar className="progress-line-danger">
								    <ProgressBar bsStyle="success" now={35} key={1} />
								    <ProgressBar bsStyle="warning" now={20} key={2} />
								    <ProgressBar active bsStyle="danger" now={10} key={3} />
								  </ProgressBar>



									<br />
									<div className="title">
										<h3>Navigation Pills</h3>
									</div>

									<Nav
										bsStyle="pills"
										className="nav-pills-primary"
										activeKey={this.state.activePill}
										onSelect={this.handlePill}
									>
								    <NavItem eventKey={1}>
											<i className="material-icons">dashboard</i>
											Dashboard
										</NavItem>
								    <NavItem eventKey={2} title="Item">
											<i className="material-icons">schedule</i>
											Schedule
										</NavItem>
								    <NavItem eventKey={3}>
											<i className="material-icons">list</i>
											Tasks
										</NavItem>
								    <NavItem eventKey={4}>
											<i className="material-icons">attach_money</i>
											Payments
										</NavItem>
								  </Nav>
								</Col>

								<Col md={6}>
									<div className="title">
										<h3>Pagination</h3>
									</div>

									<Pagination
						        ellipsis
						        boundaryLinks
						        items={12}
						        maxButtons={5}
						        activePage={7}
									/>

									<Pagination
						        items={5}
										next={<span>Next &#10095;</span>}
										prev={<span>&#10094; Prev</span>}
						        activePage={3}
										bsStyle="info"
									/>



									<div className="title">
										<h3>Labels </h3>
									</div>

									<Label bsStyle="default">Default</Label>&nbsp;
							    <Label bsStyle="primary">Primary</Label>&nbsp;
							    <Label bsStyle="success">Success</Label>&nbsp;
							    <Label bsStyle="info">Info</Label>&nbsp;
							    <Label bsStyle="warning">Warning</Label>&nbsp;
							    <Label bsStyle="danger">Danger</Label>
								</Col>
							</Row>

							<div className="space"></div>

							<div className="title">
								<h3>Notifications</h3>
							</div>
						</Grid>
					</div>

					<div className="section section-notifications" id="notifications">
						<Alert
							bsStyle="info"
							onDismiss={() => {}}
						>
							<Grid fluid>
								<div className="alert-icon">
									<i className="material-icons">info_outline</i>
								</div>
								<strong>Info alert:</strong> You've got some friends nearby, stop looking at your phone and find them...
							</Grid>
		        </Alert>

						<Alert
							bsStyle="success"
							onDismiss={() => {}}
						>
							<Grid fluid>
								<div className="alert-icon">
									<i className="material-icons">check</i>
								</div>
								<strong>Success Alert:</strong> Yuhuuu! You've got your $11.99 album from The Weeknd
							</Grid>
		        </Alert>

						<Alert
							bsStyle="warning"
							onDismiss={() => {}}
						>
							<Grid fluid>
								<div className="alert-icon">
									<i className="material-icons">warning</i>
								</div>
								<strong>Warning Alert:</strong> Hey, it looks like you still have the "copyright &copy; 2015" in your footer. Please update it!
							</Grid>
		        </Alert>

						<Alert
							bsStyle="danger"
							onDismiss={() => {}}
						>
							<Grid fluid>
								<div className="alert-icon">
									<i className="material-icons">error_outline</i>
								</div>
								<strong>Error Alert:</strong> Damn man! You screwed up the server this time. You should find a good excuse for your Boss...
							</Grid>
		        </Alert>
					</div>{/* #notifications */}


					<div className="section">
						<Grid className="tim-container">
							<div className="title">
								<h2>Typography</h2>
							</div>

							<div id="typography">
								<Row>
									<div className="tim-typo">
										<h1><span className="tim-note">Header 1</span>The Life of Material Kit </h1>
									</div>
									<div className="tim-typo">
										<h2><span className="tim-note">Header 2</span>The Life of Material Kit</h2>
									</div>
									<div className="tim-typo">
										<h3><span className="tim-note">Header 3</span>The Life of Material Kit</h3>
									</div>
									<div className="tim-typo">
										<h4><span className="tim-note">Header 4</span>The Life of Material Kit</h4>
									</div>
									<div className="tim-typo">
										<h5><span className="tim-note">Header 5</span>The Life of Material Kit</h5>
									</div>
									<div className="tim-typo">
										<h6><span className="tim-note">Header 6</span>The Life of Material Kit</h6>
									</div>

									<div className="tim-typo">
										<p><span className="tim-note">Paragraph</span> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities,
											to show people, this is the level that things could be at.</p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Quote</span>
										<blockquote>
											<p>
												I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that
												things could be at.
											</p>
											<small>
			                         Kanye West, Musician
			                         </small>
										</blockquote>
									</div>

									<div className="tim-typo">
										<span className="tim-note">Muted Text</span>
										<p className="text-muted">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
										</p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Primary Text</span>
										<p className="text-primary">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Info Text</span>
										<p className="text-info">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Success Text</span>
										<p className="text-success">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Warning Text</span>
										<p className="text-warning">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
										</p>
									</div>
									<div className="tim-typo">
										<span className="tim-note">Danger Text</span>
										<p className="text-danger">
											I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
									</div>
									<div className="tim-typo">
										<h2><span className="tim-note">Small Tag</span>
										Header with small subtitle <br />
										<small>Use "small" tag for the headers</small>
										</h2>
									</div>
								</Row>
							</div>

							<div className="space-50"></div>

							<div id="images">
								<div className="title">
									<h2>Images</h2>
								</div>
								<br />

								<Row>
									<Col sm={2}>
										<h4>Rounded Image</h4>
										<Image src={avatar} rounded responsive />
									</Col>
									<Col sm={2} smOffset={1}>
										<h4>Circle Image</h4>
										<Image src={avatar} circle responsive />
									</Col>
									<Col sm={2} smOffset={1}>
										<h4>Rounded Raised</h4>
										<Image src={avatar} rounded responsive className="img-raised" />
									</Col>

									<Col sm={2} smOffset={1}>
										<h4>Circle Raised</h4>
										<Image src={avatar} circle responsive className="img-raised" />
									</Col>
								</Row>
							</div>{/* #images */}
						</Grid>
					</div>


					<div className="section" id="javascriptComponents">
						<Grid>
							<div className="title">
								<h2>Javascript components</h2>
							</div>

							<Row id="modals">
								<Col md={6}>
									<div className="title">
										<h3>Modal</h3>
									</div>

									<Button bsStyle="primary" onClick={this.handleModal}>Launch demo modal</Button>

									<Modal show={this.state.showModal} onHide={this.handleModal}>
					          <Modal.Header closeButton>
					            <Modal.Title>Modal title</Modal.Title>
					          </Modal.Header>
					          <Modal.Body>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows
												by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
												life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
											</p>
					          </Modal.Body>
					          <Modal.Footer>
											<Button bsStyle="default" link>Nice Button</Button>
											<Button onClick={this.handleModal} bsStyle="danger" link>Close</Button>
					          </Modal.Footer>
					        </Modal>
								</Col>

								<Col md={6}>
									<div className="title">
										<h3>Popovers</h3>
									</div>

									{_map(popover, (item) => {
										const popover = (
											<Popover
												id={item.id}
												title={item.title}
											>
												{item.content}
											</Popover>
										);

										return (
											<OverlayTrigger
												trigger="click"
												placement={item.placement}
												overlay={popover}
											>
									      <Button>{item.btnLabel}</Button>
									    </OverlayTrigger>
										);
									})}
								</Col>
								<br /><br />

								<Col md={6}>
									<div className="title">
										<h3>Datepicker</h3>
									</div>

									<Row>
										<Col md={6}>
											<DatePicker
												label="Datepicker"
												selectedDay="07/19/2017"
												placeholder="Choose a date"
											/>
										</Col>
									</Row>

								</Col>

								<Col md={6}>
									<div className="title">
										<h3>Tooltips</h3>
									</div>

									{_map(tooltip, (item) => {
										const tooltip = (
											<Tooltip id={item.id}>
												{item.title}
											</Tooltip>
										);

										return (
											<OverlayTrigger
												placement={item.placement}
												overlay={tooltip}
											>
									      <Button>{item.btnLabel}</Button>
									    </OverlayTrigger>
										);
									})}
								</Col>
							</Row>

              <br /><br />
              <div className="title">
                <h3>Carousel</h3>
              </div>
						</Grid>
					</div>

          <div className="section" id="carousel">
            <Grid>
              <Row>
                <Col md={8} mdOffset={2}>
                  <div className="card card-raised card-carousel">
                    <Carousel interval={400000}>
                    <Carousel.Item>
                      <img alt="Awesome Location" src={slide1} />
                      <Carousel.Caption>
                        <h4><i className="material-icons">location_on</i> Yellowstone National Park, United States</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="Awesome Location" src={slide2} />
                      <Carousel.Caption>
                        <h4><i className="material-icons">location_on</i> Somewhere Beyond, United States</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="Awesome Location" src={slide3} />
                      <Carousel.Caption>
                        <h4><i className="material-icons">location_on</i> Yellowstone National Park, United States</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>


	      </div>{/* main */}
			</div>
		);
	}
}

export default Home;
