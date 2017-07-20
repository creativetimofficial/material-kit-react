import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class Components extends Component {
	render() {

		const styleHeader = {
			backgroundImage: 'url("https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450")',
		}
		return (
      <div className="components-page">

				<Header />

				<div className="wrapper">
					<div className="header header-filter" style={styleHeader}>
						<Grid>
							<Row>
								<Col md={6} mdOffset={3}>
									<h1 className="title text-center">Components Documentation</h1>
								</Col>
							</Row>
						</Grid>
					</div>

					<div className="main main-raised">
						main
					</div>

					<Footer />
				</div>

      </div>
		);
	}
}

export default Components;
