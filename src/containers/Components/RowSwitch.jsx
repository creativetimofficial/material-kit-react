import React, { Component } from 'react';
import { Well, Table } from 'react-bootstrap';
import ToggleButton from 'elements/ToggleButton/ToggleButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<ToggleButton
  name="option7"
  checked
  onChange={this.handleCheckbox}
>
  Toggle is on
</ToggleButton>
<ToggleButton
  name="option8"
  onChange={this.handleCheckbox}
>
  Toggle is off
</ToggleButton>`;

class RowSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option7: true,
      option8: false
    };
  }

  handleCheckbox = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.checked
    });
  };

  render() {
    return (
      <div className="tim-row" id="switch-row">
        <h2>Toggle Buttons</h2>
        <legend />
        <p>
          If you want to use something more special than a checkbox, we
          recomment the toggle buttons.
        </p>

        <p>
          To start using the toggle controls you need to import the custom made
          component:
        </p>

        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import ToggleButton from 'elements/ToggleButton/ToggleButton';`}
        </SyntaxHighlighter>

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

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <Well bsSize="small">
          Usualy form elements are{' '}
          <a
            href="https://facebook.github.io/react/docs/forms.html#controlled-components"
            target="_blank"
            rel="noopener noreferrer"
          >
            controlled components
          </a>. This mean you need to create a handler for this form element.
        </Well>

        <h4>Props</h4>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>string</td>
              <td />
              <td>Use this prop in order to reffer the contol</td>
            </tr>
            <tr>
              <td>
                <code>checked</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this to prop to mark as checked</td>
            </tr>
            <tr>
              <td>
                <code>onChange</code>
              </td>
              <td>function</td>
              <td />
              <td>Use this props to attach a handler.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RowSwitch;
