import React, {Component} from 'react';

import {
	Grid, Row, Col,
	Nav, NavItem,
	Tab,
} from 'react-bootstrap';

class HomeCarousel extends Component {
	render() {
		return (
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
		);
	}
}

export default HomeCarousel;
