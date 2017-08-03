import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<i className="material-icons">face</i>`;

class RowIcons extends Component {
  render() {
    return (
      <div className="tim-row" id="icons-row">
        <h2>Material Icons</h2>
        <legend />
        <p>
          We used the default{' '}
          <a
            href="https://design.google.com/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons for the Material Design
          </a>{' '}
          which provided by Google.
        </p>
        <i className="material-icons">face</i>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default RowIcons;
