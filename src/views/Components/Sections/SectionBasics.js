import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
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
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
    return function cleanup() {};
  });
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> with icon
              </Button>
              <Button justIcon round color="primary">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Pick your size</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary" size="sm">
                Small
              </Button>
              <Button color="primary">Regular</Button>
              <Button color="primary" size="lg">
                Large
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Pick your color</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="rose">Rose</Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Inputs</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Regular",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With floating label"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With Font Awesome Icons"
                id="font-awesome"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-users" />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Checkboxes</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Checked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Checked"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
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
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="First Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
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
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Second Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
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
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
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
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Toggle Buttons</h3>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      value="checkedA"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is on"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedB}
                      onChange={(event) => setCheckedB(event.target.checked)}
                      value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is off"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Progress Bars</h3>
              </div>
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
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Pagination</h3>
              </div>
              <Paginations
                pages={[
                  { text: 1 },
                  { text: "..." },
                  { text: 5 },
                  { text: 6 },
                  { active: true, text: 7 },
                  { text: 8 },
                  { text: 9 },
                  { text: "..." },
                  { text: 12 },
                ]}
              />
              <Paginations
                pages={[
                  { text: "PREV" },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" },
                ]}
                color="info"
              />
            </GridItem>
          </GridContainer>
        </div>
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Sliders</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Badges</h3>
              </div>
              <Badge>default</Badge>
              <Badge color="primary">primary</Badge>
              <Badge color="info">info</Badge>
              <Badge color="success">success</Badge>
              <Badge color="warning">warning</Badge>
              <Badge color="danger">danger</Badge>
              <Badge color="rose">rose</Badge>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
