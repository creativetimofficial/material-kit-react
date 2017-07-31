import React, { Component } from 'react';
import { Row, Col, Table, Well } from 'react-bootstrap';
import Input from 'elements/CustomInput/CustomInput';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Input type="text" placeholder="Regular" />

<Input type="email" label="With Floating Label" />

<Input
  type="email"
  label="Success input"
  state="success"
  value="Success"
  feedbackIcon={<i className="material-icons">done</i>}
/>

<Input
  type="email"
  label="Error input"
  state="error"
  value="Error Input"
  feedbackIcon={<i className="material-icons">clear</i>}
/>

<Input
  type="text"
  placeholder="With Material Icons"
  addonIcon={<i className="material-icons">group</i>}
/>

<Input
  type="text"
  placeholder="With Font Awesome Icons"
  addonIcon={<i className="fa fa-group" />}
/>

<Input label="Textarea" type="textarea" rows="4" />`;

class RowButtons extends Component {
  render() {
    return (
      <div className="tim-row" id="inputs-row">
        <h2>Inputs </h2>
        <legend />

        <p>
          We restyled the Bootstrap input to give it a more flat, minimal look.
          You can use them with regular labels, floating labels and states or
          input groups.
        </p>

        <p>
          To use the custom inputs you need to import the custom made component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Input from 'elements/CustomInput/CustomInput';`}
        </SyntaxHighlighter>

        <Row>
          <Col sm={4}>
            <Input type="text" placeholder="Regular" />
          </Col>
          <Col sm={4}>
            <Input type="email" label="With Floating Label" />
          </Col>
          <Col sm={4}>
            <Input
              type="email"
              label="Success input"
              state="success"
              value="Success"
              feedbackIcon={<i className="material-icons">done</i>}
            />
          </Col>
          <Col sm={4}>
            <Input
              type="email"
              label="Error input"
              state="error"
              value="Error Input"
              feedbackIcon={<i className="material-icons">clear</i>}
            />
          </Col>
          <Col sm={4}>
            <Input
              type="text"
              placeholder="With Material Icons"
              addonIcon={<i className="material-icons">group</i>}
            />
          </Col>
          <Col sm={4}>
            <Input
              type="text"
              placeholder="With Font Awesome Icons"
              addonIcon={<i className="fa fa-group" />}
            />
          </Col>
        </Row>
        <Input label="Textarea" type="textarea" rows="4" />

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
                <code>type</code>
              </td>
              <td>string</td>
              <td />
              <td>
                Use this prop to declare the type of the input. <br />
                <strong>Posible values:</strong> <code>text</code>,{' '}
                <code>email</code>, <code>textarea</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this prop to add a control label.</td>
            </tr>
            <tr>
              <td>
                <code>value</code>
              </td>
              <td>string</td>
              <td />
              <td>Use this prop for the input value.</td>
            </tr>
            <tr>
              <td>
                <code>placeholder</code>
              </td>
              <td>string</td>
              <td />
              <td>
                Use this prop for the placholder. You don't need to use{' '}
                <code>placeholder</code> if you already pass <code>label</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>addonIcon</code>
              </td>
              <td>node</td>
              <td>null</td>
              <td>
                You can pass an icon to display it in front of the input
                control.
              </td>
            </tr>
            <tr>
              <td>
                <code>feedbackIcon</code>
              </td>
              <td>node</td>
              <td>null</td>
              <td>You can pass an icon to use it with validation state.</td>
            </tr>
            <tr>
              <td>
                <code>state</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>
                Use this prop to display the validation state.<br />
                <strong>Possible values:</strong> <code>success</code>,{' '}
                <code>warning</code>, <code>error</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RowButtons;
