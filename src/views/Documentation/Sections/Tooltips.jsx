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

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Button from "components/CustomButtons/Button.jsx";

import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

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

const tooltip = `import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Button from "components/CustomButtons/Button.jsx";


import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

class Tooltips extends React.Component {
  render() {
    const { classes } = this.props;
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
  }
}

export default withStyles(tooltipsStyle)(Tooltips);
`;

class Tooltips extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Tooltips</h1>
        <h2>Styles</h2>
        <p>
          You will find all the styles for these components in
          <br />
          <code>src/assets/jss/material-kit-react/tooltipsStyle.jsx</code>.
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
}

export default withStyles(styles)(Tooltips);
