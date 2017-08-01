import React, { Component } from 'react';
import { ProgressBar, Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<ProgressBar
  now={30}
/>

<ProgressBar
  bsStyle="info"
  now={60}
/>

<ProgressBar
  now={30}
  className="progress-line-primary"
/>

<ProgressBar
  bsStyle="info"
  now={60}
  className="progress-line-info"
/>

<ProgressBar>
  <ProgressBar bsStyle="success" now={35} key={1} />
  <ProgressBar bsStyle="warning" now={20} key={2} />
  <ProgressBar active bsStyle="danger" now={10} key={3} />
</ProgressBar>`;

class RowProgressbar extends Component {
  render() {
    return (
      <div className="tim-row" id="progressbar-row">
        <h2>Progress Bars</h2>
        <legend />

        <p>
          The progress bars from Bootstrap hold the same classes and
          functionality. Adding this kit over your existing project will only
          make it look more clean. The default line is gray, each bar has a
          specific color but you can add some colors for the background lines
          using the next classes <code>.progress-line-primary</code>,{' '}
          <code>.progress-line-info</code>, <code>.progress-line-success</code>,{' '}
          <code>.progress-line-warning</code>,{' '}
          <code>.progress-line-danger</code>,{' '}
        </p>

        <ProgressBar now={30} />

        <ProgressBar bsStyle="info" now={60} />

        <ProgressBar now={30} className="progress-line-primary" />

        <ProgressBar bsStyle="info" now={60} className="progress-line-info" />

        <ProgressBar>
          <ProgressBar bsStyle="success" now={35} key={1} />
          <ProgressBar bsStyle="warning" now={20} key={2} />
          <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>

        <br />
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
                <code>className</code>
              </td>
              <td>string</td>
              <td />
              <td>
                Add color for background line.<br />
                <strong>Possible values:</strong>{' '}
                <code>progress-line-primary</code>,{' '}
                <code>progress-line-info</code>,{' '}
                <code>progress-line-success</code>,{' '}
                <code>progress-line-warning</code>,{' '}
                <code>progress-line-danger</code>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#progress-props"
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

export default RowProgressbar;
