import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Navbar collapseOnSelect fluid>
  <Navbar.Header>
    <Navbar.Toggle />
    <Navbar.Brand>
      <a href="#pablo">Brand</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav activeKey={1}>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.5}>One more separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>`;

class RowNavbar extends Component {
  render() {
    return (
      <div className="tim-row" id="navbar-row">
        <h2>Navbar </h2>
        <legend />
        <p>The classic Bootstrap Navbar was restyled:</p>

        <div id="navbar">
          <Navbar collapseOnSelect fluid>
            <Navbar.Header>
              <Navbar.Toggle />
              <Navbar.Brand>
                <a href="#pablo">Brand</a>
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
                >
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.5}>One more separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <p class="space-top">
          Besides the default navbar, we added 4 new colors: blue, green,
          orange, red. If you want to use one of them, you can do it with{' '}
          <code>bsStyle</code> prop. Set this prop: <code>info</code>,{' '}
          <code>success</code>, <code>warning</code> or <code>danger</code>.
        </p>

        <Navbar bsStyle="info" collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="#pablo">Brand</a>
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
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>One more separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar bsStyle="success" collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="#pablo">Brand</a>
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
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>One more separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar bsStyle="warning" collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="#pablo">Brand</a>
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
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>One more separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar bsStyle="danger" collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="#pablo">Brand</a>
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
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>One more separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <p className="space-top">
          Besides all this customisation, we have an{' '}
          <strong>transparent</strong> navbar. This is a special navbar that you
          can to use if you want the navbar to be transparent. We recommend that
          the part of your page that has the transparent navbar contains
          something non-cluttered, like an image. If you want to see a nice
          example in details, check{' '}
          <a href="/profile" target="_blank">
            the Profile Page
          </a>.<br />
          To use the transparent navbar you need to set{' '}
          <code>bsStyle="transparent"</code>
        </p>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#navs-props-navbar"
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

export default RowNavbar;
