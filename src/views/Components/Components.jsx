import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import {
  primaryColor,
  infoColor,
  warningColor,
  dangerColor,
  successColor
} from "assets/jss/material-kit-react.jsx";

const theme0 = createMuiTheme({
  palette: {
    primary: { main: primaryColor },
    info: { main: infoColor },
    warning: { main: warningColor },
    danger: { main: dangerColor },
    success: { main: successColor }
  }
});

const theme1 = createMuiTheme({
  palette: {
    info: { main: infoColor },
    warning: { main: warningColor },
    danger: { main: dangerColor },
    success: { main: successColor }
  }
});


const themes = [theme0, theme1];

class Components extends React.Component {
  state = { theme: 0 };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={themes[this.state.theme]}>
        <div>
          <Header
            brand="Material Kit React"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          <Parallax image={require("assets/img/bg4.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Material Kit React.</h1>
                    <h3 className={classes.subtitle}>
                      A Badass Material-UI Kit based on Material Design.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>

          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <h2>Theme color</h2>
                  <Button
                    round
                    justIcon
                    style={{ background: "#9c27b0" }}
                    onClick={() => this.setState({ theme: 0})}
                  >
                    <Favorite />
                  </Button>
                  <Button
                    round
                    justIcon
                    style={{ background: "#3f51b5" }}
                    onClick={() => this.setState({ theme: 1 })}
                  >
                    <Favorite />
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
            <SectionBasics />
            <SectionNavbars />
            <SectionTabs />
            <SectionPills />
            <SectionNotifications />
            <SectionTypography />
            <SectionJavascript />
            <SectionCarousel />
            <SectionCompletedExamples />
            <SectionLogin />
            <GridItem md={12} className={classes.textCenter}>
              <Link to={"/login-page"} className={classes.link}>
                <Button color="primary" size="lg" simple>
                  View Login Page
                </Button>
              </Link>
            </GridItem>
            <SectionExamples />
            <SectionDownload />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(componentsStyle)(Components);
