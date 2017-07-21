import React, {Component} from 'react';
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox';
import bg from 'img/city.jpg';

class Signup extends Component {
  render() {
    return (
      <div className="signup-page">
        <Header />

        <div className="wrapper">
          <div
            className="header header-filter"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',  backgroundPosition: 'top center', }}
          >
            <Grid>
              <Row>
                <Col md={4} mdOffset={4} sm={6} smOffset={3}>

                  <div className="card card-signup">
                    <form>
                      <div className="header header-primary text-center">
                        <h4>Sign Up</h4>
                        <div className="social-line">
                          <Button href="#pablo" justIcon link>
                            <i className="fa fa-facebook-square"></i>
                          </Button>
                          <Button href="#pablo" justIcon link>
                            <i className="fa fa-twitter"></i>
                          </Button>
                          <Button href="#pablo" justIcon link>
                            <i className="fa fa-google-plus"></i>
                          </Button>
                        </div>
                      </div>
                      <p className="text-divider">Or Be Classical</p>
                      <div className="content">
                        <Input
                          type="text"
                          placeholder="First Name..."
                          addonIcon={<i className="material-icons">face</i>}
                        />
                        <Input
                          type="email"
                          placeholder="Email..."
                          addonIcon={<i className="material-icons">email</i>}
                        />
                        <Input
                          type="password"
                          placeholder="Password..."
                          addonIcon={<i className="material-icons">lock_outline</i>}
                        />
                        <Checkbox
                          name="subscribe"
                          checked
                          onChange={()=>{}}
                        >
                          Subscribe to newsletter
                        </Checkbox>
                      </div>
                      <div className="footer text-center">
                        <Button bsStyle="primary" bsSize="large" link>Get Started</Button>
                      </div>
                    </form>
                  </div>

                </Col>
              </Row>
            </Grid>

            <Footer />
          </div>
        </div>

      </div>
    );
  }
}

export default Signup;
