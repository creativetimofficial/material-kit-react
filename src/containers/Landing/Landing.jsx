import React, { Component } from 'react';
import _map from 'lodash/map';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Button from 'elements/CustomButton/CustomButton';
import Input from 'elements/CustomInput/CustomInput';

import FaPlay from 'react-icons/lib/fa/play';

import Profile from 'components/Profile/Profile';
import { team } from 'mock-data.js';

class Landing extends Component {
  render() {
    const styleHeader = {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450")'
    };

    return (
      <div className="landing-page">
        <Header />

        <div className="wrapper">
          <div className="header header-filter" style={styleHeader}>
            <Grid>
              <Row>
                <Col md={6}>
                  <h1 className="title">Write the best title for your page.</h1>
                  <h4>
                    Every landing page needs a small description after the big
                    bold title, that's why we added this text here. Add here all
                    the information that can make you or your product create the
                    first impression.
                  </h4>
                  <br />
                  <Button
                    bsStyle="danger"
                    bsSize="lg"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  >
                    <FaPlay size={18} /> Watch video
                  </Button>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="main main-raised">
            <Grid>
              <div className="section text-center section-landing">
                <Row>
                  <Col md={8} mdOffset={2}>
                    <h2 className="title">Let's talk product</h2>
                    <h5 className="description">
                      This is the paragraph where you can write more details
                      about your product. Keep you user engaged by providing
                      meaningful information. Remember that by this time, the
                      user is curious, otherwise he wouldn't scroll to get here.
                      Add a button if you want the user to see more.
                    </h5>
                  </Col>
                </Row>

                <div class="features">
                  <Row>
                    <Col md={4}>
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="material-icons">chat</i>
                        </div>
                        <h4 className="info-title">First Feature</h4>
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing a feature will be enough.
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="material-icons">verified_user</i>
                        </div>
                        <h4 className="info-title">Second Feature</h4>
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing a feature will be enough.
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="info">
                        <div className="icon icon-danger">
                          <i className="material-icons">fingerprint</i>
                        </div>
                        <h4 className="info-title">Third Feature</h4>
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing a feature will be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="section text-center">
                <h2 className="title">Here is our team</h2>

                <div className="team">
                  <Row>
                    {_map(team, item => {
                      return (
                        <Col md={4}>
                          <Profile
                            img={item.img}
                            imgSize={170}
                            description={item.description}
                            name={item.name}
                            role={item.role}
                            links={item.links}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>

              <div className="section landing-section">
                <Row>
                  <Col md={8} mdOffset={2}>
                    <h2 className="text-center title">Work with us</h2>
                    <h4 className="text-center description">
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one and contact us
                      about any further collaboration. We will responde get back
                      to you in a couple of hours.
                    </h4>
                    <form className="contact-form">
                      <Row>
                        <Col md={6}>
                          <Input label="Your Name" type="text" />
                        </Col>
                        <Col md={6}>
                          <Input label="Your Email" type="email" />
                        </Col>
                      </Row>

                      <Input label="Your Messge" type="textarea" rows="4" />

                      <div className="text-center">
                        <Button bsStyle="primary">Send Message</Button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </Grid>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
