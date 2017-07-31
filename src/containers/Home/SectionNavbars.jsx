import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class SectionNavbars extends Component {
  render() {
    return (
      <div className="section section-navbars">
        <Grid id="menu-dropdown">
          <Row>
            <Col md={6}>
              <div className="title">
                <h3>Menu</h3>
              </div>

              <Navbar collapseOnSelect fluid>
                <Navbar.Header>
                  <Navbar.Toggle />
                  <Navbar.Brand>
                    <a href="#pablo">Menu</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav activeKey={1}>
                    <NavItem eventKey={1} href="#">
                      Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      Link
                    </NavItem>
                    <NavDropdown
                      eventKey={3}
                      title="Dropdown"
                      id="basic-nav-dropdown"
                      pullRight
                    >
                      <MenuItem header>Dropdown header</MenuItem>
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Separated link</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.5}>
                        One more separated link
                      </MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col md={6}>
              <div className="title">
                <h3>Menu with Icons</h3>
              </div>

              <Navbar bsStyle="info" fluid>
                <Navbar.Header>
                  <Navbar.Toggle />
                  <Navbar.Brand>
                    <a href="#pablo">Icons</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                      <i className="material-icons">email</i>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      <i className="material-icons">face</i>
                    </NavItem>
                    <NavDropdown
                      eventKey={3}
                      title={<i className="material-icons">settings</i>}
                      id="dropdown-icons"
                      pullRight
                    >
                      <MenuItem header>Dropdown header</MenuItem>
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Separated link</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.5}>
                        One more separated link
                      </MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>

          <div className="title">
            <h3>Navigation</h3>
          </div>
        </Grid>

        <div id="navbar">
          <div className="navigation-example">
            <Navbar bsStyle="primary">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Primary Color</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={1} pullRight>
                  <NavItem eventKey={1} href="#">
                    <i className="material-icons">explore</i> Discover
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <i className="material-icons">account_circle</i> Profile
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <i className="material-icons">settings</i> Settings
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bsStyle="info">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Info Color</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={1} pullRight>
                  <NavItem eventKey={1} href="#">
                    Discover
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Profile
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    Settings
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bsStyle="success">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Success Color</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={1} pullRight>
                  <NavItem eventKey={1} href="#">
                    <i className="material-icons">explore</i>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <i className="material-icons">account_circle</i>
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <i className="material-icons">settings</i>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bsStyle="warning">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Warning Color</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <i className="fa fa-facebook-square" />
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <i className="fa fa-twitter" />
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <i className="fa fa-google-plus" />
                  </NavItem>
                  <NavItem eventKey={4} href="#">
                    <i className="fa fa-instagram" />
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bsStyle="danger">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Danger Color</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <i className="fa fa-facebook-square" /> Share
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <i className="fa fa-twitter" /> Tweet
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <i className="fa fa-pinterest" /> Pin
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Navbar bsStyle="transparent">
              <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                  <a href="#pablo">Transparent</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <i className="fa fa-facebook-square" /> Facebook
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <i className="fa fa-twitter" /> Twitter
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <i className="fa fa-instagram" /> Instagram
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionNavbars;
