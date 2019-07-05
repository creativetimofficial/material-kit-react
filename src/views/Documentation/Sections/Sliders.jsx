/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
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
        <h1>noUiSlider v13.1.5</h1>
        <h2>
          <code>Notice</code>
        </h2>
        <p>
          Due to the fact that{" "}
          <a
            href="https://github.com/algolia/react-nouislider?ref=creativetim"
            target="_blank"
          >
            <code>React noUiSlider v2.0.1</code>
          </a>{" "}
          was not well maintained, we've dropped the usage of this component,
          and replaced it with the{" "}
          <a
            href="https://refreshless.com/nouislider/?ref=creativetim"
            target="_blank"
          >
            <code>noUiSlider v12.1.0</code>
          </a>{" "}
          component.
        </p>
        <p>
          Please refer to{" "}
          <a
            href="https://refreshless.com/nouislider/?ref=creativetim"
            target="_blank"
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
