import React, {Component} from 'react';

import {
	Grid, Row, Col,
} from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox';
import Radio from 'elements/CustomRadio/CustomRadio';
import ToggleButton from 'elements/ToggleButton/ToggleButton';
import Slider from 'elements/CustomSlider/CustomSlider';

class SectionBasic extends Component {
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

	render() {
		return (
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
		);
	}
}

export default SectionBasic;
