import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputLabel from "material-ui/Input/InputLabel";
import FormControl from "material-ui/Form/FormControl";
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

const codeExample = `import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputLabel from "material-ui/Input/InputLabel";
import FormControl from "material-ui/Form/FormControl";
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

class DateTimePicker extends React.Component{
  render(){
    const { classes } = this.props;
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
  }
}

export default withStyles(styles)(DateTimePicker);
`;

class DateTimePicker extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>React Datetime v2.14.0</h1>
        <p>
          We've used{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime
          </a>{" "}
          for this component and we've restyled it to match our theme.
        </p>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime documentation
          </a>{" "}
          for more information.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>src/assets/scss/plugins/_plugin-react-datetime.scss</code>.
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
}

export default withStyles(styles)(DateTimePicker);
