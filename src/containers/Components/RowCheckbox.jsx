import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeColors = `<Checkbox
  name="option1"
  onChange={this.handleCheckbox}
>
  Unchecked
</Checkbox>
<Checkbox
  name="option2"
  checked
  onChange={this.handleCheckbox}
>
  Checked
</Checkbox>
<Checkbox
  name="option3"
  disabled
>
  Disabled Unchecked
</Checkbox>
<Checkbox
  name="option4"
  disabled
  checked
>
  Disabled Checked
</Checkbox>`;

class RowCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: false,
      option2: true,
      option3: false,
      option4: true
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
      <div className="tim-row" id="checkbox-row">
        <h2>Checkboxes</h2>
        <p>
          To use the custom checkbox controls you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Checkbox from 'elements/CustomCheckbox/CustomCheckbox';`}
        </SyntaxHighlighter>
        <div>
          <Checkbox
            name="option1"
            checked={this.state.option1}
            onChange={this.handleCheckbox}
          >
            Unchecked
          </Checkbox>
          <Checkbox
            name="option2"
            checked={this.state.option2}
            onChange={this.handleCheckbox}
          >
            Checked
          </Checkbox>
          <Checkbox name="option3" disabled checked={this.state.option3}>
            Disabled Unchecked
          </Checkbox>
          <Checkbox name="option4" disabled checked={this.state.option4}>
            Disabled Checked
          </Checkbox>
        </div>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeColors}
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
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#forms-props-checkbox"
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

export default RowCheckbox;
