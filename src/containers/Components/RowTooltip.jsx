import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<OverlayTrigger
  placement="top"
  overlay={<Tooltip>Tooltip on top</Tooltip>}
>
  <Button>Button with Tooltip</Button>
</OverlayTrigger>`;

class RowTooltip extends Component {
  render() {
    return (
      <div className="tim-row" id="tooltip-row">
        <h2>Tooltips</h2>
        <legend />
        <p>We restyled the Bootstrap tooltip.</p>
        <br />
        <br />

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Tooltip on top</Tooltip>}
        >
          <Button>Button with Tooltip</Button>
        </OverlayTrigger>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#tooltips-props-tooltip"
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

export default RowTooltip;
