import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg-federal-building.jpg";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MKBox component="header" position="relative">
      <MKBox
        component="nav"
        position="fixed"
        pt="1.2em"
        pb="1em"
        width="100%"
        sx={{
          transition: "all 0.3s ease-in-out",
          backgroundColor: isScrolled ? "#344767" : "transparent",
          boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          zIndex: "100",
        }}
      >
        <Container>
          <Grid container flexDirection="row" alignItems="center" justifyContent="space-between">
            <Grid item>
              <MKTypography
                component={Link}
                href="#"
                variant="button"
                color="white"
                fontWeight="regular"
                fontSize="1.5rem"
                py={0.8125}
                mr={2}
              >
                G&L Federal
              </MKTypography>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Stack direction="row" spacing={2} alignItems="center" gap={2}>
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  fontSize="1.2rem"
                >
                  Home
                </MKTypography>
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  fontSize="1.2rem"
                >
                  About
                </MKTypography>
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  fontSize="1.2rem"
                >
                  Services
                </MKTypography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,

          backgroundSize: "cover",
          backgroundPosition: "center left",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={7} flexDirection="column" justifyContent="center">
            <MKTypography variant="h1" color="white" fontSize="5.5rem">
              G&L Federal
            </MKTypography>
            <MKBox
              component="div"
              color="white"
              my="20px"
              width="30vw"
              sx={{ border: "1px solid white" }}
            ></MKBox>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6} width="1200">
              Strategically focused Automation and Security Services for the United States
              Government
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">Get Started</MKButton>
              <MKButton variant="text" color="white">
                Contact Us
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Home;
