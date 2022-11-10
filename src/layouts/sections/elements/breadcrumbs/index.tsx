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

import { theme } from "../../../assets/theme";

// @mui material components
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";

// Material Kit 2 React examples
import Breadcrumbs from "../../../examples/Breadcrumbs";

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Breadcrumbs page components code
import breadcrumbsCode from "../../elements/breadcrumbs/code";

function BreadcrumbsEl(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Breadcrumbs"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/elements/breadcrumbs" },
          { label: "Breadcrumbs" },
        ]}
      >
        <View title="Breadcrumbs" code={breadcrumbsCode}>
          <MKBox component="section" bgColor="white" py={8}>
            used
            <Container>
              <Grid container spacing={2} item xs={12} lg={10} mx="auto">
                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: "Home",
                        route: "/sections/elements/breadcrumbs",
                      },
                    ]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: "Home",
                        route: "/sections/elements/breadcrumbs",
                      },
                      { label: "Library" },
                    ]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: "Home",
                        route: "/sections/elements/breadcrumbs",
                      },
                      {
                        label: "Library",
                        route: "/sections/elements/breadcrumbs",
                      },
                      { label: "Data" },
                    ]}
                  />
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default BreadcrumbsEl;
