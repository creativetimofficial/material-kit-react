/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react plugin that creates slider
import Slider from "nouislider";

const codeExample = `import React from "react";
// plugin that creates slider
import Slider from "nouislider";
export default function Sliders() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
  return (
    <div>
      <div className="slider-primary" id="sliderRegular" />
      <br />
      <div className="slider-info" id="sliderDouble" />
    </div>
  );
}`;

export default function Sliders() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
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
        was not well maintained, we've dropped the usage of this component, and
        replaced it with the{" "}
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
      <div className="slider-primary" id="sliderRegular" />
      <br />
      <div className="slider-info" id="sliderDouble" />
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
