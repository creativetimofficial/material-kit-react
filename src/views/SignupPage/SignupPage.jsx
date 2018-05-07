import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import Checkbox from "material-ui/Checkbox";
import FormControlLabel from "material-ui/Form/FormControlLabel";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-react/views/signupPage.jsx";

import image from "assets/img/bg7.jpg";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
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
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={5}>
                        <InfoArea
                          title="Marketing"
                          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          title="Fully Coded in HTML5"
                          description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          title="Built Audience"
                          description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                          icon={Group}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <div className={classes.textCenter}>
                          <IconButton>
                            <i
                              className={classes.socials + " fab fa-twitter"}
                            />
                          </IconButton>
                          {` `}
                          <IconButton>
                            <i
                              className={classes.socials + " fab fa-dribbble"}
                            />
                          </IconButton>
                          {` `}
                          <IconButton>
                            <i
                              className={classes.socials + " fab fa-facebook-f"}
                            />
                          </IconButton>
                          {` `}
                          <h4 className={classes.socialTitle}>
                            or be classical
                          </h4>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "First Name..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <LockOutline
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Password..."
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              root: classes.checkboxLabelControl,
                              label: classes.checkboxLabel
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked
                                }}
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color="primary">
                              Get started
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Components);
