import React, {Component} from 'react';

import {
	Grid, Row, Col,
	Nav, NavItem,
	ProgressBar,
	Pagination,
	Label,
} from 'react-bootstrap';


class HomePagination extends Component {
	constructor(props) {
    super(props);
    this.state = {
			activePill: 2,
			showModal: false,
    };
	}

	handlePill = (key) => {
		this.setState(() => {
		  return {
				activePill: key,
			};
		});
	}

	render() {
		return (
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
		);
	}
}

export default HomePagination;
