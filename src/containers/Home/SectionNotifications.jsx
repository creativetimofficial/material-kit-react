import React, {Component} from 'react';

import {
	Grid,
	Alert,
} from 'react-bootstrap';

class SectionNotifications extends Component {
	render() {
		return (
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
			</div>
		);
	}
}

export default SectionNotifications;
