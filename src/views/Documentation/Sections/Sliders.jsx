import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// react plugin that creates slider
import Nouislider from "react-nouislider";

const styles = {
  bdExample: {
    padding: "1.5rem",
    margin: "1rem -15px",
    position: "relative",
    marginRight: "0",
    marginBottom: "-8px",
    marginLeft: "0",
    borderWidth: ".2rem",
    border: "solid rgb(245, 242, 240)"
  }
};

const codeExample = `import React from 'react';
// react plugin that creates slider
import Nouislider from "react-nouislider";

function Sliders({...props}){
  return (
    <div>
      <Nouislider
        start={[40]}
        connect={[true, false]}
        step={1}
        range={{ min: 0, max: 100 }}
      />
      <br />
      <div className="slider slider-info">
        <Nouislider
          start={[20, 60]}
          connect={[false, true, false]}
          step={1}
          range={{ min: 0, max: 100 }}
        />
      </div>
    </div>
  );
}

export default Sliders;
`;

function Sliders({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <h1>React noUiSlider v2.0.1</h1>
      <p>
        For this component we've used a{" "}
        <a
          href="https://refreshless.com/nouislider/"
          target="_blank"
          rel="noopener noreferrer"
        >
          noUiSlider
        </a>{" "}
        react component,{" "}
        <a
          href="https://github.com/algolia/react-nouislider"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-nouislider
        </a>, and we've restyled to match our theme.
      </p>
      <p>
        Please refer to{" "}
        <a
          href="https://github.com/algolia/react-nouislider"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-nouislider documentation
        </a>{" "}
        and/or{" "}
        <a
          href="https://refreshless.com/nouislider/"
          target="_blank"
          rel="noopener noreferrer"
        >
          noUiSlider
        </a>{" "}
        for more information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>src/assets/scss/plugins/_plugin-nouislider.scss</code>.
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <Nouislider
          start={[40]}
          connect={[true, false]}
          step={1}
          range={{ min: 0, max: 100 }}
        />
        <br />
        <div className="slider slider-info">
          <Nouislider
            start={[20, 60]}
            connect={[false, true, false]}
            step={1}
            range={{ min: 0, max: 100 }}
          />
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <p>
        If you want to add color to your slider you need to wrap the{" "}
        <code>Nouislider</code> in a <code>div</code> with the{" "}
        <code>className</code> and <code>"slider slider-$color"</code>, where{" "}
        <code>$color</code> can be one of <code>primary</code>,{" "}
        <code>info</code>, <code>success</code>, <code>warning</code>,{" "}
        <code>danger</code>.
      </p>
    </div>
  );
}

export default withStyles(styles)(Sliders);
