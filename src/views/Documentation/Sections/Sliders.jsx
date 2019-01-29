import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react plugin that creates slider
import nouislider from "nouislider";

const codeExample = `import React from "react";
// plugin that creates slider
import nouislider from "nouislider";
class Sliders extends React.Component {
  componentDidMount() {
    nouislider.create(this.refs.slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    nouislider.create(this.refs.slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render(){
    return (
      <div>
        <div className="slider-primary" ref="slider1" />
        <br />
        <div className="slider-info" ref="slider2" />
        <br />
      </div>
    );
  }
}
export default Sliders;
`;

class Sliders extends React.Component {
  componentDidMount() {
    nouislider.create(this.refs.slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    nouislider.create(this.refs.slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <div>
        <h1>noUiSlider v12.0.0</h1>
        <h2>
          <code>Notice</code>
        </h2>
        <p>
          Due to the fact that{" "}
          <a
            href="https://github.com/algolia/react-nouislider"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>React noUiSlider v2.0.1</code>
          </a>{" "}
          was not well maintained, we've dropped the usage of this component,
          and replaced it with the{" "}
          <a
            href="https://refreshless.com/nouislider/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>noUiSlider v12.0.0</code>
          </a>{" "}
          component.
        </p>
        <p>
          Please refer to{" "}
          <a
            href="https://refreshless.com/nouislider/"
            target="_blank"
            rel="noopener noreferrer"
          >
            noUiSlider documentation
          </a>{" "}
          for more information.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in
          <br />{" "}
          <code>
            src/assets/scss/material-dashboard-pro-react/plugins/_plugin-nouislider.scss
          </code>
          .
        </p>
        <h2>Example</h2>
        <div className="slider-primary" ref="slider1" />
        <br />
        <div className="slider-info" ref="slider2" />
        <br />
        <p>
          If you want to add color to your slider you need to add on the{" "}
          <code>div</code> a <code>className="slider-$color"</code>, where{" "}
          <code>$color</code> can be one of <code>primary</code>,{" "}
          <code>info</code>, <code>success</code>, <code>warning</code>,{" "}
          <code>danger</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Sliders;
