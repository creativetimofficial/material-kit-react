import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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
        <p>
          To use the custom buttons you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Button from 'elements/CustomButton/CustomButton';`}
        </SyntaxHighlighter>
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
          <Button bsStyle="primary" round justIcon>
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
            href="http://fontawesome.github.io/Font-Awesome/icons/"
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
                <code>round</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this flag to create rounded buttons.</td>
            </tr>
            <tr>
              <td>
                <code>link</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this flag to create simple buttons.</td>
            </tr>
            <tr>
              <td>
                <code>href</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>
                Use this to create an <code>anchor</code> instead of{' '}
                <code>button</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>justIcon</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this to create icon buttons</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#buttons-props"
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

export default RowButtons;
