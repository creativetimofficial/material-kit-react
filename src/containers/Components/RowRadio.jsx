import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import Radio from 'elements/CustomRadio/CustomRadio';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Radio
  name="option5"
  value="value1"
  onChange={this.handleRadio}
>
  Radio is off
</Radio>
<Radio
  name="option5"
  value="value2"
  checked
  onChange={this.handleRadio}
>
  Radio is on
</Radio>
<Radio
  name="option6"
  disabled
>
  Disabled Radio is off
</Radio>
<Radio
  name="option6"
  disabled
  checked
>
  Disabled Radio is on
</Radio>`;

class RowRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option5: 'value2',
      option6: 'value2'
    };
  }

  handleRadio = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <div className="tim-row" id="radio-row">
        <h2>Radio Buttons</h2>
        <legend />
        <p>
          To use the custom radio controls you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Radio from 'elements/CustomRadio/CustomRadio';`}
        </SyntaxHighlighter>

        <div>
          <Radio
            name="option5"
            value="value1"
            checked={this.state.option5 === 'value1'}
            onChange={this.handleRadio}
          >
            Radio is off
          </Radio>
          <Radio
            name="option5"
            value="value2"
            checked={this.state.option5 === 'value2'}
            onChange={this.handleRadio}
          >
            Radio is on
          </Radio>
          <Radio
            name="option6"
            disabled
            checked={this.state.option6 === 'value1'}
          >
            Disabled Radio is off
          </Radio>
          <Radio
            name="option6"
            disabled
            checked={this.state.option6 === 'value2'}
          >
            Disabled Radio is on
          </Radio>
        </div>

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
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#forms-props-radio"
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

export default RowRadio;
