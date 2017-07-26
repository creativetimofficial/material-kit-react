import React, { Component } from 'react';
import Button from 'elements/CustomButton/CustomButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeColors = `<Button>Default</Button>
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="info">Info</Button>
<Button bsStyle="success">Success</Button>
<Button bsStyle="warning">Warning</Button>
<Button bsStyle="danger">Danger</Button>
<Button bsStyle="white">White</Button>`;

const codeSizes = `<Button bsStyle="primary" bsSize="lg">Large</Button>
<Button bsStyle="primary">Normal</Button>
<Button bsStyle="primary" bsSize="sm">Small</Button>
<Button bsStyle="primary" bsSize="xs">Extra Small</Button>`;

const codeStyles = `<Button bsStyle="primary">Default</Button>
<Button bsStyle="primary" round>Round</Button>
<Button bsStyle="primary" round>
  <i className="material-icons">favorite</i> With Icon
</Button>
<Button bsStyle="primary" round floating>
  <i className="material-icons">favorite</i>
</Button>
<Button bsStyle="primary" justIcon>
  <i className="material-icons">favorite</i>
</Button>
<Button bsStyle="primary" link>Simple</Button>`;

class RowButtons extends Component {
  render() {
    return (
      <div className="tim-row" id="buttons-row">
        <h2>Buttons</h2>
        <legend />
        <h4>Colors</h4>
        <p>
          We worked over the original Bootstrap classes, choosing a different,
          slightly intenser color pallete:
        </p>
        <p>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="success">Success</Button>
          <br />
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="white">White</Button>
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Button from 'elements/CustomButton/CustomButton';`}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeColors}
        </SyntaxHighlighter>

        <h4>Sizes</h4>
        <p>Buttons come in all needed sizes:</p>
        <p>
          <Button bsStyle="primary" bsSize="lg">
            Large
          </Button>
          <Button bsStyle="primary">Normal</Button>
          <Button bsStyle="primary" bsSize="sm">
            Small
          </Button>
          <Button bsStyle="primary" bsSize="xs">
            Extra Small
          </Button>
        </p>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSizes}
        </SyntaxHighlighter>

        <h4>Styles</h4>
        <p>
          We added extra classes that can help you better customise the look.
          You can use regular buttons, rounded corners buttons or plain simple
          buttons. Let's see some examples:
        </p>
        <p>
          <Button bsStyle="primary">Default</Button>
          <Button bsStyle="primary" round>
            Round
          </Button>
          <Button bsStyle="primary" round>
            <i className="material-icons">favorite</i> With Icon
          </Button>
          <Button bsStyle="primary" round floating>
            <i className="material-icons">favorite</i>
          </Button>
          <Button bsStyle="primary" justIcon>
            <i className="material-icons">favorite</i>
          </Button>
          <Button bsStyle="primary" link>
            Simple
          </Button>
        </p>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeStyles}
        </SyntaxHighlighter>

        <p>
          Button groups and disabled state all work like they are supposed to.
          We used the Font Awesome icons that can be found{' '}
          <a
            href="http://fortawesome.github.io/Font-Awesome/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          and Material Design Icons that can be found{' '}
          <a
            href="https://design.google.com/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </div>
    );
  }
}

export default RowButtons;
