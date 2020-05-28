/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

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
// core components
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

export default function LinearProgress(){
  return (
    <div>
      <CustomLinearProgress
        variant="determinate"
        color="primary"
        value={30}
      />
      <CustomLinearProgress
        variant="determinate"
        color="info"
        value={60}
      />
      <CustomLinearProgress
        variant="determinate"
        color="success"
        value={100}
        style={{ width: "35%", display: "inline-block" }}
      />
      <CustomLinearProgress
        variant="determinate"
        color="warning"
        value={100}
        style={{ width: "20%", display: "inline-block" }}
      />
      <CustomLinearProgress
        variant="determinate"
        color="danger"
        value={25}
        style={{ width: "45%", display: "inline-block" }}
      />
    </div>
  );
}`;
const codeProps = `CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};`;

function LinearProgress({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <h1>CustomLinearProgress</h1>
      <p>
        We've decided to extend the{" "}
        <a
          href="https://material-ui-next.com/demos/progress/#linear?ref=creativetim"
          target="_blank"
        >
          default material-ui linear progress
        </a>{" "}
        to make it more easier for you to use our styles.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>
          src/assets/jss/material-kit-react/components/customLinearProgressStyle.js
        </code>
        .
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={30}
        />
        <CustomLinearProgress variant="determinate" color="info" value={60} />
        <CustomLinearProgress
          variant="determinate"
          color="success"
          value={100}
          style={{ width: "35%", display: "inline-block" }}
        />
        <CustomLinearProgress
          variant="determinate"
          color="warning"
          value={100}
          style={{ width: "20%", display: "inline-block" }}
        />
        <CustomLinearProgress
          variant="determinate"
          color="danger"
          value={25}
          style={{ width: "45%", display: "inline-block" }}
        />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        You can pass additional props from the{" "}
        <a
          href="https://material-ui-next.com/api/linear-progress/?ref=creativetim"
          target="_blank"
        >
          default material-ui linear progress
        </a>
        .
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default withStyles(styles)(LinearProgress);
