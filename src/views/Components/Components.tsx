import React, { Component } from "react";
import HeaderWithStyle from "../../components/Header/Header";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Button from "../../components/CustomButtons/Button";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import componentsStyle from "../../assets/jss/material-kit-react/views/components";
import Footer from "../../components/Footer/Footer";
import SectionBasics from "./Sections/SectionBasics";
import SectionNavbars from "./Sections/SectionNavbars";
import SectionTabs from "./Sections/SectionTabs";
import SectionPills from "./Sections/SectionPills";
import SectionNotifications from "./Sections/SectionNotifications";
import SectionTypography from "./Sections/SectionTypography";
import SectionJavascript from "./Sections/SectionJavascript";
import SectionCarousel from "./Sections/SectionCarousel";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples";
import SectionLogin from "./Sections/SectionLogin";
import SectionExamples from "./Sections/SectionExamples";
import SectionDownload from "./Sections/SectionDownload";
interface IComponentsState {
  color: string;
  fixedClasses: string;
}

class Components extends Component<any, IComponentsState> {
  constructor(props: any, state: IComponentsState) {
    super(props, state);

    this.state = {
      color: "primary",
      fixedClasses: "dropdown show"
    };
  }
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <HeaderWithStyle
          brand="Material kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("../../assets/img/bg4.jpg")}>
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
    );
  }
}
// brand="Material Kit React"
//           // rightLinks={<HeaderLinks />}
//           fixed
//           color="transparent"
//           changeColorOnScroll={{
//             height: 400,
//             color: "white"
//           }}
//           {...rest}
export default withStyles(componentsStyle)(Components);
