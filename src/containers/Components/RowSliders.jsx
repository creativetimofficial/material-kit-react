import React, { Component } from 'react';
import { Well, Table } from 'react-bootstrap';
import Slider from 'elements/CustomSlider/CustomSlider';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Slider
  range={{ min: 0, max: 100 }}
  start={[40]}
  connect={[true, false]}
  brand="primary"
/>

<Slider
  range={{ min: 0, max: 100 }}
  start={[20, 60]}
  connect={[false, true, false]}
  brand="info"
/>`;

class RowSliders extends Component {
  render() {
    return (
      <div className="tim-row" id="sliders-row">
        <h2>Sliders</h2>
        <legend />
        <p>We restyled noUIslider, while keeping the design consistent.</p>

        <p>
          To start using this{' '}
          <a
            href="http://refreshless.com/nouislider/"
            rel="noopener noreferrer"
            target="_blank"
          >
            noUIslider
          </a>{' '}
          wrapper you need to import the custom made component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Slider from 'elements/CustomSlider/CustomSlider';`}
        </SyntaxHighlighter>
        <Slider
          range={{ min: 0, max: 100 }}
          start={[40]}
          connect={[true, false]}
          brand="primary"
        />
        <br />

        <Slider
          range={{ min: 0, max: 100 }}
          start={[20, 60]}
          connect={[false, true, false]}
          brand="info"
        />
        <br />

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
                <code>brand</code>
              </td>
              <td>string</td>
              <td />
              <td>
                Use this prop to set the color of the slider.<br />
                <strong>Possible values:</strong> <code>primary</code>,{' '}
                <code>info</code>, <code>success</code>, <code>warning</code>,{' '}
                <code>danger</code>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{' '}
          <a
            href="https://github.com/algolia/react-nouislider/blob/master/index.js#L55"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-nouislider documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default RowSliders;
