import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Submenu from './Submenu';

import RowButtons from './RowButtons';
import RowCheckbox from './RowCheckbox';
import RowRadio from './RowRadio';
import RowSwitch from './RowSwitch';
import RowDropdown from './RowDropdown';
import RowInputs from './RowInputs';
import RowNavbar from './RowNavbar';
import RowNavpills from './RowNavpills';
import RowPagination from './RowPagination';
import RowProgressbar from './RowProgressbar';
import RowSliders from './RowSliders';
import RowLabels from './RowLabels';
import RowTables from './RowTables';
import RowDatepicker from './RowDatepicker';
import RowModal from './RowModal';
import RowTooltip from './RowTooltip';
import RowPopover from './RowPopover';
import RowIcons from './RowIcons';
import RowNotification from './RowNotification';

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
                    <Submenu />
                  </Col>
                  <Col md={8} mdOffset={1}>
                    <div className="tim-container">
                      <RowButtons />
                      <RowCheckbox />
                      <RowRadio />
                      <RowSwitch />
                      <RowDropdown />
                      <RowInputs />
                      <RowNavbar />
                      <RowNavpills />
                      <RowPagination />
                      <RowProgressbar />
                      <RowSliders />
                      <RowLabels />
                      <RowTables />
                      <RowDatepicker />
                      <RowModal />
                      <RowTooltip />
                      <RowPopover />
                      <RowIcons />
                      <RowNotification />
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
