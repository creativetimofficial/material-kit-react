import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Pagination
  bsStyle="success"
  items={5}
  activePage={3}
  next={<span>Next &#10095;</span>}
  prev={<span>&#10094; Prev</span>}
/>`;

class RowPagination extends Component {
  render() {
    return (
      <div className="tim-row" id="pagination-row">
        <h2>Pagination</h2>
        <legend />
        <p>
          The Bootstrap pagination elements were customised to fit the overall
          theme. Besides the classic look, we also added the color classes to
          offer more customisation.
        </p>

        <Pagination
          bsStyle="primary"
          items={5}
          activePage={3}
          next={<span>Next &#10095;</span>}
          prev={<span>&#10094; Prev</span>}
        />
        <Pagination
          bsStyle="info"
          items={5}
          activePage={3}
          next={<span>Next &#10095;</span>}
          prev={<span>&#10094; Prev</span>}
        />
        <Pagination
          bsStyle="success"
          items={5}
          activePage={3}
          next={<span>Next &#10095;</span>}
          prev={<span>&#10094; Prev</span>}
        />
        <Pagination
          bsStyle="warning"
          items={5}
          activePage={3}
          next={<span>Next &#10095;</span>}
          prev={<span>&#10094; Prev</span>}
        />
        <Pagination
          bsStyle="danger"
          items={5}
          activePage={3}
          next={<span>Next &#10095;</span>}
          prev={<span>&#10094; Prev</span>}
        />

        <br />
        <br />
        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#pagination-props"
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

export default RowPagination;
