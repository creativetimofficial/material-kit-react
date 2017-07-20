import React, {Component} from 'react';

import {Grid, Row, Col, Image} from 'react-bootstrap';

import avatar from 'img/avatar.jpg';

class SectionTypo extends Component {
	render() {
		return (
			<div className="section">
				<Grid className="tim-container">
					<div className="title">
						<h2>Typography</h2>
					</div>

					<div id="typography">
						<Row>
							<div className="tim-typo">
								<h1>
									<span className="tim-note">Header 1</span>The Life of Material Kit
								</h1>
							</div>
							<div className="tim-typo">
								<h2>
									<span className="tim-note">Header 2</span>The Life of Material Kit</h2>
							</div>
							<div className="tim-typo">
								<h3>
									<span className="tim-note">Header 3</span>The Life of Material Kit</h3>
							</div>
							<div className="tim-typo">
								<h4>
									<span className="tim-note">Header 4</span>The Life of Material Kit</h4>
							</div>
							<div className="tim-typo">
								<h5>
									<span className="tim-note">Header 5</span>The Life of Material Kit</h5>
							</div>
							<div className="tim-typo">
								<h6>
									<span className="tim-note">Header 6</span>The Life of Material Kit</h6>
							</div>

							<div className="tim-typo">
								<p>
									<span className="tim-note">Paragraph</span>
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
							</div>
							<div className="tim-typo">
								<span className="tim-note">Quote</span>
								<blockquote>
									<p>
										I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
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
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
							</div>
							<div className="tim-typo">
								<span className="tim-note">Info Text</span>
								<p className="text-info">
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
							</div>
							<div className="tim-typo">
								<span className="tim-note">Success Text</span>
								<p className="text-success">
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
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
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
							</div>
							<div className="tim-typo">
								<h2>
									<span className="tim-note">Small Tag</span>
									Header with small subtitle
									<br/>
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
						<br/>

						<Row>
							<Col sm={2}>
								<h4>Rounded Image</h4>
								<Image src={avatar} rounded responsive/>
							</Col>
							<Col sm={2} smOffset={1}>
								<h4>Circle Image</h4>
								<Image src={avatar} circle responsive/>
							</Col>
							<Col sm={2} smOffset={1}>
								<h4>Rounded Raised</h4>
								<Image src={avatar} rounded responsive className="img-raised"/>
							</Col>

							<Col sm={2} smOffset={1}>
								<h4>Circle Raised</h4>
								<Image src={avatar} circle responsive className="img-raised"/>
							</Col>
						</Row>
					</div>{/* #images */}
				</Grid>
			</div>
		);
	}
}

export default SectionTypo;
