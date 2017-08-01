import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Nav
  bsStyle="pills"
  className="nav-pills-info"
  activeKey={2}
>
  <NavItem eventKey={1}>
    <i className="material-icons">dashboard</i>
    Dashboard
  </NavItem>
  <NavItem eventKey={2} title="Item">
    <i className="material-icons">schedule</i>
    Schedule
  </NavItem>
  <NavItem eventKey={3}>
    <i className="material-icons">list</i>
    Tasks
  </NavItem>
</Nav>`;

class RowNavpills extends Component {
  render() {
    return (
      <div className="tim-row" id="navpills-row">
        <h2> Nav Pills</h2>
        <legend />
        <p>
          We changed the design for the Bootstrap nav pills into something a bit
          more fresh. We also added more color classes for customisation. To use
          other colors you need to set the <code>className</code> param to:{' '}
          <code>nav-pills-primary</code>, <code>nav-pills-info</code>,{' '}
          <code>nav-pills-success</code>, <code>nav-pills-warning</code> or{' '}
          <code>nav-pills-danger</code>.
        </p>

        <Nav bsStyle="pills" className="nav-pills-primary" activeKey={2}>
          <NavItem eventKey={1}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <i className="material-icons">schedule</i>
            Schedule
          </NavItem>
          <NavItem eventKey={3}>
            <i className="material-icons">list</i>
            Tasks
          </NavItem>
        </Nav>
        <br />
        <Nav bsStyle="pills" className="nav-pills-info" activeKey={2}>
          <NavItem eventKey={1}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <i className="material-icons">schedule</i>
            Schedule
          </NavItem>
          <NavItem eventKey={3}>
            <i className="material-icons">list</i>
            Tasks
          </NavItem>
        </Nav>
        <br />
        <Nav bsStyle="pills" className="nav-pills-success" activeKey={2}>
          <NavItem eventKey={1}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <i className="material-icons">schedule</i>
            Schedule
          </NavItem>
          <NavItem eventKey={3}>
            <i className="material-icons">list</i>
            Tasks
          </NavItem>
        </Nav>
        <br />
        <Nav bsStyle="pills" className="nav-pills-warning" activeKey={2}>
          <NavItem eventKey={1}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <i className="material-icons">schedule</i>
            Schedule
          </NavItem>
          <NavItem eventKey={3}>
            <i className="material-icons">list</i>
            Tasks
          </NavItem>
        </Nav>
        <br />
        <Nav bsStyle="pills" className="nav-pills-danger" activeKey={2}>
          <NavItem eventKey={1}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <i className="material-icons">schedule</i>
            Schedule
          </NavItem>
          <NavItem eventKey={3}>
            <i className="material-icons">list</i>
            Tasks
          </NavItem>
        </Nav>
        <br />
        <br />
        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#navs-props-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default RowNavpills;
