import React, { Component } from 'react';
import { Grid, Row, Col, Nav, NavItem, Tab } from 'react-bootstrap';

import { Header, Footer } from 'components';

import bg from 'img/examples/city.jpg';
import christian from 'img/christian.jpg';
import chris1 from 'img/examples/chris1.jpg';
import chris0 from 'img/examples/chris0.jpg';
import chris3 from 'img/examples/chris3.jpg';
import chris4 from 'img/examples/chris4.jpg';
import chris5 from 'img/examples/chris5.jpg';
import chris7 from 'img/examples/chris7.jpg';
import chris9 from 'img/examples/chris9.jpg';
import chris6 from 'img/examples/chris6.jpg';
import chris8 from 'img/examples/chris8.jpg';
// import bg from 'img/city2.jpg';
// import bg from 'img/city2.jpg';

class Profile extends Component {
  state = { activePill: 'studio' };

  handlePill = key => {
    this.setState(() => {
      return {
        activePill: key
      };
    });
  };

  render() {
    const { activePill } = this.state;
    return (
      <div className="profile-page">
        <Header />

        <div className="wrapper">
          <div
            className="header header-filter"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center'
            }}
          />

          <div className="main main-raised">
            <div className="profile-content">
              <Grid>
                <Row>
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src={christian}
                        alt="Circle"
                        className="img-circle img-responsive img-raised"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title">Christian Louboutin</h3>
                      <h6>Designer</h6>
                    </div>
                  </div>
                </Row>
                <div className="description text-center">
                  <p>
                    An artist of considerable range, Chet Faker — the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure.{' '}
                  </p>
                </div>

                <Row>
                  <Col md={6} mdOffset={3}>
                    <Tab.Container id="tabs" defaultActiveKey={activePill}>
                      <div className="profile-tabs">
                        <div className="nav-align-center">
                          <Nav
                            bsStyle="pills"
                            className="nav-pills-primary"
                            onSelect={this.handlePill}
                          >
                            <NavItem eventKey="studio">
                              <i className="material-icons">camera</i>
                              Studio
                            </NavItem>
                            <NavItem eventKey="work" title="Item">
                              <i className="material-icons">palette</i>
                              Work
                            </NavItem>
                            <NavItem eventKey="shows">
                              <i className="material-icons">favorite</i>
                              Favorite
                            </NavItem>
                          </Nav>

                          <Tab.Content animation={false} className="gallery">
                            <Tab.Pane eventKey="studio">
                              <Row>
                                <Col md={6}>
                                  <img
                                    src={chris1}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris0}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                                <Col md={6}>
                                  <img
                                    src={chris3}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris4}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="work">
                              <Row>
                                <Col md={6}>
                                  <img
                                    src={chris5}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris7}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris9}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                                <Col md={6}>
                                  <img
                                    src={chris6}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris8}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="shows">
                              <Row>
                                <Col md={6}>
                                  <img
                                    src={chris4}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris6}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                                <Col md={6}>
                                  <img
                                    src={chris7}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris5}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                  <img
                                    src={chris9}
                                    className="img-rounded"
                                    alt="Christian"
                                  />
                                </Col>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
