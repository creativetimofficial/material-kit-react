/* eslint-disable */
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import style from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const styles = {
  ...style,
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

const codeCheckbox = `import React from "react";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class CheckboxRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render(){
    const { classes } = this.props;
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => this.handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{ checked: classes.checked }}
              />
            }
            classes={{ label: classes.label }}
            label="Unchecked"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => this.handleToggle(22)}
                checked={
                  this.state.checked.indexOf(22) !== -1 ? true : false
                }
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{ checked: classes.checked }}
              />
            }
            classes={{ label: classes.label }}
            label="Checked"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            disabled
            control={
              <Checkbox
                tabIndex={-1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{ checked: classes.checked }}
              />
            }
            classes={{
              label: classes.label,
              disabled: classes.disabledCheckboxAndRadio
            }}
            label="Disabled Unchecked"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            disabled
            control={
              <Checkbox
                tabIndex={-1}
                checked={
                  this.state.checked.indexOf(24) !== -1 ? true : false
                }
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{ checked: classes.checked }}
              />
            }
            classes={{
              label: classes.label,
              disabled: classes.disabledCheckboxAndRadio
            }}
            label="Disabled Checked"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxRadioSwitch);`;

const codeRadio = `import React from "react";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class CheckboxRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEnabled: "b",
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  render(){
    const { classes } = this.props;
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Radio
                checked={this.state.selectedEnabled === "a"}
                onChange={this.handleChangeEnabled}
                value="a"
                name="radio button enabled"
                aria-label="A"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="First Radio"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Radio
                checked={this.state.selectedEnabled === "b"}
                onChange={this.handleChangeEnabled}
                value="b"
                name="radio button enabled"
                aria-label="B"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Second Radio"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            disabled
            control={
              <Radio
                checked={false}
                value="a"
                name="radio button disabled"
                aria-label="B"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio
                }}
              />
            }
            classes={{
              label: classes.label,
              disabled: classes.disabledCheckboxAndRadio
            }}
            label="Disabled Unchecked Radio"
          />
        </div>
        <div className={wrapperDiv}>
          <FormControlLabel
            disabled
            control={
              <Radio
                checked={true}
                value="b"
                name="radio button disabled"
                aria-label="B"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio
                }}
              />
            }
            classes={{
              label: classes.label,
              disabled: classes.disabledCheckboxAndRadio
            }}
            label="Disabled Checked Radio"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxRadioSwitch);
`;

const codeSwicth = `import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class CheckboxRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: false
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedA"
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.switchChecked,
                  thumb: classes.switchIcon,
                  iconChecked: classes.switchIconChecked,
                  track: classes.switchBar
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Toggle is on"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange("checkedB")}
                value="checkedB"
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.switchChecked,
                  thumb: classes.switchIcon,
                  iconChecked: classes.switchIconChecked,
                  track: classes.switchBar
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Toggle is off"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxRadioSwitch);
`;

class CheckboxRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div>
        <h1>Checkboxes, Radios and Switches</h1>
        <p>
          We haven't extended{" "}
          {
            " "
            // eslint-disable-next-line
          }
          <a
            href="https://material-ui-next.com/demos/selection-controls/?ref=creativetim"
            target="_blank"
          >
            these components from Material-UI
          </a>
          . We've just added our style over their components.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in
          <br />
          <code>
            src/assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx
          </code>
          .
        </p>
        <p>Let's take a look at each one of them, and how to use our styles.</p>
        <h2>Checkboxes</h2>
        <div className={classes.bdExample}>
          <div className={wrapperDiv}>
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  onClick={() => this.handleToggle(21)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              }
              classes={{ label: classes.label }}
              label="Unchecked"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  onClick={() => this.handleToggle(22)}
                  checked={this.state.checked.indexOf(22) !== -1 ? true : false}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              }
              classes={{ label: classes.label }}
              label="Checked"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  tabIndex={-1}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              }
              classes={{
                label: classes.label,
                disabled: classes.disabledCheckboxAndRadio
              }}
              label="Disabled Unchecked"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  tabIndex={-1}
                  checked={this.state.checked.indexOf(24) !== -1 ? true : false}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              }
              classes={{
                label: classes.label,
                disabled: classes.disabledCheckboxAndRadio
              }}
              label="Disabled Checked"
            />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCheckbox}
        </SyntaxHighlighter>
        <h2>Radios</h2>
        <div className={classes.bdExample}>
          <div className={wrapperDiv}>
            <FormControlLabel
              control={
                <Radio
                  checked={this.state.selectedEnabled === "a"}
                  onChange={this.handleChangeEnabled}
                  value="a"
                  name="radio button enabled"
                  aria-label="A"
                  icon={
                    <FiberManualRecord className={classes.radioUnchecked} />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="First Radio"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              control={
                <Radio
                  checked={this.state.selectedEnabled === "b"}
                  onChange={this.handleChangeEnabled}
                  value="b"
                  name="radio button enabled"
                  aria-label="B"
                  icon={
                    <FiberManualRecord className={classes.radioUnchecked} />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Second Radio"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              disabled
              control={
                <Radio
                  checked={false}
                  value="a"
                  name="radio button disabled"
                  aria-label="B"
                  icon={
                    <FiberManualRecord className={classes.radioUnchecked} />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label,
                disabled: classes.disabledCheckboxAndRadio
              }}
              label="Disabled Unchecked Radio"
            />
          </div>
          <div className={wrapperDiv}>
            <FormControlLabel
              disabled
              control={
                <Radio
                  checked={true}
                  value="b"
                  name="radio button disabled"
                  aria-label="B"
                  icon={
                    <FiberManualRecord className={classes.radioUnchecked} />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label,
                disabled: classes.disabledCheckboxAndRadio
              }}
              label="Disabled Checked Radio"
            />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRadio}
        </SyntaxHighlighter>
        <h2>Switch</h2>
        <div className={classes.bdExample}>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange("checkedA")}
                  value="checkedA"
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    track: classes.switchBar
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Toggle is on"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedB}
                  onChange={this.handleChange("checkedB")}
                  value="checkedB"
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    track: classes.switchBar
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Toggle is off"
            />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSwicth}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxRadioSwitch);
