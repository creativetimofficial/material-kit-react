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
import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Typography from "@mui/material/Typography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import footerRoutes from "footer.routes";

// Routes
import routes from "routes";

import InputAdornment from "@mui/material/InputAdornment";

// Images
import bgImage from "assets/images/Z.png";

// import TwitterIcon from "@mui/icons-material/Twitter";
import MKButton from "components/MKButton";
import TextField from "@mui/material/TextField";
import BetButton from "components/BetButton/BetButton";
// import Button from "assets/theme/components/button";
// import { CurrencyBitcoin } from "@mui/icons-material";
import PaymentProviders from "components/PaymentProviders/PaymentProviders";

// Crypto Stuff
import Web3 from "web3";

function Presentation() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");

    if (isNaN(rawValue)) {
      return;
    }
    const formattedValue = Number(rawValue).toLocaleString();
    setInputValue(formattedValue);
  };

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
        sticky
      />
      {/*The background Image and hero texts*/}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          filter: "blur(4px)",
          zIndex: -1,
        }}
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          // backgroundSize: "cover",
          // backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            {/*The title of the page*/}
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Pursuit.Bet{" "}
            </MKTypography>
            {/*The blurb of the page*/}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Your only one stop page for all your betting needs. We provide the best odds and the
              best betting experience.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container xs={12} lg={12} spacing={1} alignItems="center" mx="auto">
          {/*Left Card*/}
          <Grid item lg={6} sx={{ flex: 1 }}>
            <Card sx={{ padding: 2, flex: 1, width: "100%", height: "100%" }}>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
              >
                <Grid item>
                  <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
                    To begin betting, you need to deposit point into your account. You can do this
                    by joining our discord server
                  </Typography>
                </Grid>
                <Grid item>
                  <MKButton
                    color="primary"
                    onClick={() => {
                      window.open("https://discord.gg/h9cGqHp5Fw");
                    }}
                  >
                    Join our discord
                  </MKButton>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/*Right Card*/}
          <Grid item lg={6}>
            <Card sx={{ padding: 2, maxHeight: "400px" }}>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item lg={12}>
                  <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
                    Deposit points into your account using the methods below.
                  </Typography>
                </Grid>
                <Grid item lg={12}>
                  <Grid container columnGap={4} rowGap={1}>
                    <TextField
                      id="filled-basic"
                      sx={{ flexGrow: 1, maxWidth: "300px" }}
                      label="Type here..."
                      value={inputValue}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="end">.00</InputAdornment>,
                      }}
                      inputProps={{
                        maxLength: 10,
                        sx: { textAlign: "right", fontSize: 20 },
                      }}
                    ></TextField>
                    {/* <BetButton amount={inputValue} PaymentProviders={choice}></BetButton> */}
                    {/* <PaymentProviders amount={inputValue} /> */}
                    <BetButton amount={inputValue} />
                  </Grid>
                </Grid>
                <Grid item lg={12}>
                  <Typography sx={{ fontSize: "15px" }}>
                    This is how many points will be deposited into your account
                  </Typography>
                  <TextField
                    disabled
                    value={inputValue}
                    sx={{ maxWidth: "200px" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="start">Points</InputAdornment>,
                    }}
                    inputProps={{ style: { textAlign: "right", fontSize: "15px" } }}
                  ></TextField>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Presentation;
