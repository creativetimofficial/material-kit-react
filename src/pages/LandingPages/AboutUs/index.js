/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections

import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";
// Images
import bgImage from "assets/images/about-us.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://discord.gg/h9cGqHp5Fw",
          label: "Join our discord",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        height="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Mission Statement
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              At Pursuit, we strive to revolutionize the betting experience by merging the thrill of
              live events with the power of blockchain technology. Our mission is to provide a
              secure and transparent platform where users can engage in para-mutuel betting on live
              events, leveraging cryptocurrencies for seamless transactions. We aim to create an
              immersive betting environment that offers unique and entertaining experiences while
              prioritizing user privacy and security.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://twitter.com/Pursuit_Bet"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default AboutUs;
