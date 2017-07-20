import React, {Component} from 'react';
import _map from 'lodash/map';

import { popover, tooltip } from 'mock-data.js';

import {
	Grid, Row, Col,
	Modal,
	OverlayTrigger, Popover, Tooltip,
} from 'react-bootstrap';
import DatePicker from 'elements/DatePicker/DatePicker';
import Button from 'elements/CustomButton/CustomButton';

class SectionJsComponents extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showModal: false,
    };
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
										key={item.id}
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
										key={item.id}
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
		);
	}
}

export default SectionJsComponents;
