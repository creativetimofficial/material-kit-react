import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

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

const inputs = `// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

class Example extends React.Component{
  render(){
    return (
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  labelText="Disabled"
                  id="disabled"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      disabled: true
                  }}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  id="regular"
                  inputProps={{
                      placeholder: "Regular"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  labelText="With floating label"
                  id="float"
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  labelText="Success input"
                  id="success"
                  success
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  labelText="Error input"
                  id="error"
                  error
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                  labelText="With material Icons"
                  id="material"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
                  }}
              />
          </GridItem>
      </GridContainer>
    );
  }
}

export default Example;`;
const inputsProp = `CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};`;

class Inputs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Inputs</h1>
        <h2>Styles</h2>
        <p>
          You will find all the styles for this component in
          <br />
          <code>
            src/assets/jss/material-kit-react/components/customInputStyle.jsx
          </code>.
        </p>
        <h2>Examples</h2>
        <div className={classes.bdExample}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Disabled"
                id="disabled"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  disabled: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="With floating label"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inputs}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inputsProp}
        </SyntaxHighlighter>
        <p>
          To see what props you can pass inside the <code>inputProps</code>,{" "}
          <code>labelProps</code>, <code>formControlProps</code> please check
          out the{" "}
          <a
            href="https://material-ui-next.com/api/input/"
            target="_blank"
            rel="noopener noreferrer"
          >
            material-ui input documentation
          </a>,{" "}
          <a
            href="https://material-ui-next.com/api/input-label/"
            target="_blank"
            rel="noopener noreferrer"
          >
            material-ui label documentation
          </a>{" "}
          and{" "}
          <a
            href="https://material-ui-next.com/api/form-control/"
            target="_blank"
            rel="noopener noreferrer"
          >
            material-ui form control documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Inputs);
