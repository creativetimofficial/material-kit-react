import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import DatePicker from 'elements/DatePicker/DatePicker';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<DatePicker
  label="Datepicker"
  selectedDay="03/12/2016"
  placeholder="Choose a date"
/>`;

class RowDatepicker extends Component {
  render() {
    return (
      <div className="tim-row" id="datepicker-row">
        <h2>Datepicker</h2>
        <legend />

        <p>
          For datepicker we use{' '}
          <a
            href="http://react-day-picker.js.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            react-day-picker
          </a>{' '}
          component with some visual customizations.
        </p>

        <p>
          To start using this{' '}
          <a
            href="http://react-day-picker.js.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            react-day-picker
          </a>{' '}
          wrapper you need to import the custom made component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import DatePicker from 'elements/DatePicker/DatePicker';`}
        </SyntaxHighlighter>

        <Row>
          <Col md={4}>
            <DatePicker
              label="Datepicker"
              selectedDay="03/12/2016"
              placeholder="Choose a date"
            />
          </Col>
        </Row>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

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
                <code>label</code>
              </td>
              <td>string</td>
              <td />
              <td>Use this to display a label for the input field.</td>
            </tr>
            <tr>
              <td>
                <code>selectedDay</code>
              </td>
              <td>string</td>
              <td />
              <td>
                Use this to decide what date is marked as selected. The date
                should be in a specific format: <code>03/20/2016</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>placeholder</code>
              </td>
              <td>string</td>
              <td />
              <td />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RowDatepicker;
