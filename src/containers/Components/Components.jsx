import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import RowButtons from './RowButtons';

class Components extends Component {
  render() {
    const styleHeader = {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450")'
    };

    return (
      <div className="components-page">
        <Header />

        <div className="wrapper">
          <div className="header header-filter" style={styleHeader}>
            <Grid>
              <Row>
                <Col md={6} mdOffset={3}>
                  <h1 className="title text-center">
                    Components Documentation
                  </h1>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="main main-raised">
            <div className="section">
              <Grid>
                <Row>
                  <Col md={2}>
                    <div className="fixed-section">
                      <ul>
                        <li>
                          <a href="#buttons-row">Buttons</a>
                        </li>
                        <li>
                          <a href="#checkbox-row">Checkbox/Radio/Toggle</a>
                        </li>
                        <li>
                          <a href="#dropdown-row">Dropdown</a>
                        </li>
                        <li>
                          <a href="#inputs-row">Inputs</a>
                        </li>
                        <li>
                          <a href="#textarea-row">Textarea</a>
                        </li>
                        <li>
                          <a href="#navbar-row">Navigation</a>
                        </li>
                        <li>
                          <a href="#pagination-row">Pagination</a>
                        </li>
                        <li>
                          <a href="#progressbar-row">Progress Bars</a>
                        </li>
                        <li>
                          <a href="#sliders-row">Sliders</a>
                        </li>
                        <li>
                          <a href="#labels-row">Labels</a>
                        </li>
                        <li>
                          <a href="#tables-row">Tables</a>
                        </li>
                        <li>
                          <a href="#datepicker-row">Datepicker</a>
                        </li>
                        <li>
                          <a href="#modal-row">Modals</a>
                        </li>
                        <li>
                          <a href="#tooltip-row">Tooltips/Popovers</a>
                        </li>
                        <li>
                          <a href="#icons-row">Material Icons</a>
                        </li>
                        <li>
                          <a href="#notification-row">Notifications</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={8} mdOffset={1}>
                    <div className="tim-container">
                      <RowButtons />
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Components;
