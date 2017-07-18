import React, {Component} from 'react';

import {
	Grid, Row, Col,
  Carousel,
} from 'react-bootstrap';

import slide1 from 'img/bg2.jpeg';
import slide2 from 'img/bg3.jpeg';
import slide3 from 'img/bg4.jpeg';

class HomeCarousel extends Component {
	render() {
		return (
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
		);
	}
}

export default HomeCarousel;
