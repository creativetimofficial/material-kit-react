import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `const popover = (
  <Popover title="Popover on top">
    Here will be some very useful information about his popover.
  </Popover>
);

<OverlayTrigger
  trigger="click"
  placement="top"
  overlay={popover}
>
  <Button>Popover on top</Button>
</OverlayTrigger>`;

const popover = (
  <Popover title="Popover on top">
    Here will be some very useful information about his popover.
  </Popover>
);

class RowPopover extends Component {
  render() {
    return (
      <div className="tim-row" id="popover-row">
        <h2>Popovers</h2>
        <legend />
        <p>
          We restyled the Bootstrap popover to align with the Material Design
          Concept. <br />
          See the following example:
        </p>

        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button>Popover on top</Button>
        </OverlayTrigger>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#popover-props"
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

export default RowPopover;
