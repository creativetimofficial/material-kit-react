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

import React from "react";
import { footerRoutes } from "../../../footer.routes";

import { theme } from "../../../assets/theme";

// @mui material components
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import { MKBox, MKTypography } from "../../../components";

// Material Kit 2 React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import CenteredFooter from "../../../examples/Footers/CenteredFooter";
import { BreadcrumbRoute, Breadcrumbs } from "../../../examples";

import { routes } from "../../../routes";

function BaseLayout({
  breadcrumb,
  title,
  children,
}: React.PropsWithChildren<BaseLayoutProps>): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
        <MKBox bgColor="white" shadow="sm" py={0.25}>
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "https://www.creative-tim.com/product/material-kit-react",
              label: "free download",
              color: "info",
            }}
            isTransparent
            relative
          />
        </MKBox>

        <Container sx={{ mt: 6 }}>
          <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
            <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
              <Breadcrumbs routes={breadcrumb} />
            </MKBox>

            <MKTypography variant="h3" mb={1}>
              {title}
            </MKTypography>

            {children}
          </Grid>
        </Container>

        <MKBox mt="auto">
          <CenteredFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </ThemeProvider>
  );
}

// Typechecking props for the BaseLayout
interface BaseLayoutProps {
  breadcrumb: BreadcrumbRoute[];
  title: string;
}

export default BaseLayout;
