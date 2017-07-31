import React, { Component } from 'react';
import {
  Row,
  Col,
  DropdownButton,
  MenuItem,
  Dropdown,
  Label
} from 'react-bootstrap';
import Flag from 'elements/Flag/Flag';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<DropdownButton title="Regular" id="dropdown-regular" bsStyle="primary">
  <MenuItem eventKey="1">Action</MenuItem>
  <MenuItem eventKey="2">Another action</MenuItem>
  <MenuItem eventKey="3">Something else here</MenuItem>
  <MenuItem divider />
  <MenuItem eventKey="4">Separated link</MenuItem>
  <MenuItem divider />
  <MenuItem eventKey="5">One more separated link</MenuItem>
</DropdownButton>`;

class RowDropdown extends Component {
  render() {
    return (
      <div className="tim-row" id="dropdown-row">
        <h2>Dropdown</h2>
        <legend />
        <p>
          We are very proud to present the dropdown which has a subtle
          animation. We also thought of another use-case: dropdown with flags.{' '}
          <br />
          <strong>IMPORTANT!</strong> The focus state is <strong>Purple</strong>{' '}
          by default, on the dropdowns from the navbars will take the color of
          the navbar parent.
        </p>

        <Row>
          <Col md={3}>
            <DropdownButton
              title="Regular"
              id="dropdown-regular"
              bsStyle="primary"
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="5">One more separated link</MenuItem>
            </DropdownButton>
          </Col>
          <Col md={3}>
            <Dropdown id="dropdown-custom">
              <Dropdown.Toggle bsStyle="primary">
                <Flag img="US" /> Flags
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem eventKey="1">
                  <Flag img="DE" /> Deutsch
                </MenuItem>
                <MenuItem eventKey="2">
                  <Flag img="GB" /> English(UK)
                </MenuItem>
                <MenuItem eventKey="3">
                  <Flag img="FR" /> Français
                </MenuItem>
                <MenuItem eventKey="4">
                  <Flag img="RO" /> Română
                </MenuItem>
                <MenuItem eventKey="5">
                  <Flag img="IT" /> Italiano
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="6">
                  <Flag img="ES" /> Español <Label>soon</Label>
                </MenuItem>
                <MenuItem eventKey="7">
                  <Flag img="BR" /> Português <Label>soon</Label>
                </MenuItem>
                <MenuItem eventKey="8">
                  <Flag img="JP" /> 日本語 <Label>soon</Label>
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#btn-dropdowns-props-dropdown-button"
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

export default RowDropdown;
