import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Label bsStyle="default">Default</Label>
<Label bsStyle="primary">Primary</Label>
<Label bsStyle="success">Success</Label>
<Label bsStyle="info">Info</Label>
<Label bsStyle="warning">Warning</Label>
<Label bsStyle="danger">Danger</Label>`;

class RowLabels extends Component {
  render() {
    return (
      <div className="tim-row" id="labels-row">
        <h2>Labels</h2>
        <legend />
        <p>
          We restyled the default options for labels and we added the filled
          class, that can be used in any combination.
        </p>
        <Label bsStyle="default">Default</Label>&nbsp;
        <Label bsStyle="primary">Primary</Label>&nbsp;
        <Label bsStyle="success">Success</Label>&nbsp;
        <Label bsStyle="info">Info</Label>&nbsp;
        <Label bsStyle="warning">Warning</Label>&nbsp;
        <Label bsStyle="danger">Danger</Label>
        <br />
        <br />
        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#label-props"
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

export default RowLabels;
