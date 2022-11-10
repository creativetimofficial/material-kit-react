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

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../../../assets/theme";

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Typography page components
import TypographyRoboto from "./components/TypographyRoboto";

// Typography page components code
import typographyRobotoCode from "./components/TypographyRoboto/code";

function Typography(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Typography"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/elements/Typography" },
          { label: "Typography" },
        ]}
      >
        <View title="Typography - Font Family Roboto" code={typographyRobotoCode}>
          <TypographyRoboto />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Typography;
