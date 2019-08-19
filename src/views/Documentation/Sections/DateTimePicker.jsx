/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
// core components

const styles = {
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  },
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

const codeExample = `import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
// core components

const styles = {
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  },
};

const useStyles = makeStyles(styles);

export default function DateTimePicker(){
  const classes = useStyles();
  return (
    <div>
      <InputLabel className={classes.label}>
        Datetime Picker
      </InputLabel>
      <br />
      <FormControl fullWidth>
        <Datetime
          inputProps={{ placeholder: "Datetime Picker Here" }}
        />
      </FormControl>
    </div>
  );
}`;

export default function DateTimePicker() {
  const classes = useStyles();
  return (
    <div>
      <h1>React Datetime v2.16.3</h1>
      <p>
        We've used{" "}
        <a
          href="https://github.com/YouCanBookMe/react-datetime?ref=creativetim"
          target="_blank"
        >
          react-datetime
        </a>{" "}
        for this component and we've restyled it to match our theme.
      </p>
      <p>
        Please refer to{" "}
        <a
          href="https://github.com/YouCanBookMe/react-datetime?ref=creativetim"
          target="_blank"
        >
          react-datetime documentation
        </a>{" "}
        for more information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br /> <code>src/assets/scss/plugins/_plugin-react-datetime.scss</code>.
      </p>
      <p>
        If you want to match the input of this plugin with the inputs from
        Material-UI, please take a look at this issue here:{" "}
        <a
          href="https://github.com/creativetimofficial/material-kit-react/issues/20?ref=creativetim"
          target="_blank"
        >
          https://github.com/creativetimofficial/material-kit-react/issues/20
        </a>
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <InputLabel className={classes.label}>Datetime Picker</InputLabel>
        <br />
        <FormControl fullWidth>
          <Datetime inputProps={{ placeholder: "Datetime Picker Here" }} />
        </FormControl>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}
