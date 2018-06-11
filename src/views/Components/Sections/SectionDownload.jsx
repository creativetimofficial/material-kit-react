/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Do you love this UI Kit?</h2>
              <h4>
                Cause if you do, it can be yours for FREE. Hit the buttons below
                to navigate to our website where you can find the kit. We also
                have the Bootstrap 4 version on plain HTML. Start a new project
                or give an old Bootstrap project a new look!
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="primary"
                size="lg"
                href="https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
              >
                Free React Download
              </Button>
              <Button
                color="primary"
                size="lg"
                href="https://www.creative-tim.com/product/material-kit"
                target="_blank"
              >
                Free HTML Downoad
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want more?</h2>
              <h4>
                We've launched{" "}
                <a
                  href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                  target="_blank"
                >
                  Material Dashboard PRO React{" "}
                </a>.It has a huge number of components, sections and example
                pages. Start Your Development With A Badass Material-UI
                Dashboard inspired by Material Design.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="rose"
                size="lg"
                disabled
                href="https://www.creative-tim.com/product/material-kit-pro-react"
                target="_blank"
              >
                Material Kit PRO
              </Button>
              <Button
                color="rose"
                size="lg"
                href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                target="_blank"
              >
                Material Dashboard PRO
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for supporting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button color="google">
              <i className={classes.socials + " fab fa-google-plus-g"} />Share
            </Button>
            <Button color="github">
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
