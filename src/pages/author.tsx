/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Theme } from "@mui/material";
// @mui material components
import Card from "@mui/material/Card";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../assets/theme";

// Material Kit 2 React components
import { MKBox } from "../components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "../examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "../layouts/pages/landing-pages/author/sections/Profile";
import Posts from "../layouts/pages/landing-pages/author/sections/Posts";
import Contact from "../layouts/pages/landing-pages/author/sections/Contact";
import Footer from "../layouts/pages/landing-pages/author/sections/Footer";

// Images
import bgImage from "../assets/images/city-profile.jpg";

import { routes } from "../routes";

import React from "react";

const AuthorPage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://www.creative-tim.com/product/material-kit-react",
        label: "free download",
        color: "info",
      }}
      isTransparent
      light
    />

    <MKBox bgColor="white">
      <MKBox
        minHeight="25rem"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { dark, grey },
          }: Theme) =>
            `${linearGradient(rgba(grey?.A700, 0.8), rgba(dark.dark, 0.8))}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ functions: { rgba } }: Theme) => rgba("white", 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }: Theme) => xxl,
        }}
      >
        <Profile />
        <Posts />
      </Card>
      <Contact />
      <Footer />
    </MKBox>
  </ThemeProvider>
);

export default AuthorPage;