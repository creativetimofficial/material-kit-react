/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Button from "components/CustomButtons/Button.js";

import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.js";

const styles = {
  ...tooltipsStyle,
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

const useStyles = makeStyles(styles);

const tooltip = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/tooltipsStyle.js";

const useStyles = makeStyles(styles);

export default function Tooltips(){
  const classes = useStyles();
  return (
    <div>
      <h1>Tooltips</h1>
      <h2>Example</h2>
      <Tooltip
        id="tooltip-left"
        title="Tooltip on left"
        placement="left"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button>On left</Button>
      </Tooltip>
      <Tooltip
        id="tooltip-top"
        title="Tooltip on top"
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button>On top</Button>
      </Tooltip>
      <Tooltip
        id="tooltip-bottom"
        title="Tooltip on bottom"
        placement="bottom"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button>On bottom</Button>
      </Tooltip>
      <Tooltip
        id="tooltip-right"
        title="Tooltip on right"
        placement="right"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button>On right</Button>
      </Tooltip>
    </div>
  );
}`;

export default function Tooltips() {
  const classes = useStyles();
  return (
    <div>
      <h1>Tooltips</h1>
      <h2>Styles</h2>
      <p>
        You will find all the styles for these components in
        <br />
        <code>src/assets/jss/material-kit-react/tooltipsStyle.js</code>.
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <Tooltip
          id="tooltip-left"
          title="Tooltip on left"
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button>On left</Button>
        </Tooltip>
        <Tooltip
          id="tooltip-top"
          title="Tooltip on top"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button>On top</Button>
        </Tooltip>
        <Tooltip
          id="tooltip-bottom"
          title="Tooltip on bottom"
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button>On bottom</Button>
        </Tooltip>
        <Tooltip
          id="tooltip-right"
          title="Tooltip on right"
          placement="right"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button>On right</Button>
        </Tooltip>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {tooltip}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        Please check out the{" "}
        <a
          href="https://material-ui-next.com/demos/tooltips/?ref=creativetim"
          target="_blank"
        >
          official material-ui documentation
        </a>
        .
      </p>
    </div>
  );
}
