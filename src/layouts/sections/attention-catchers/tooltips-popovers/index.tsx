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

// Tooltips and popovers page components
import Popovers from "./components/Popovers";
import Tooltips from "./components/Tooltips";

// Tooltips and popovers page components code
import popoversCode from "./components/Popovers/code";
import tooltipsCode from "./components/Tooltips/code";

function TooltipsPopovers(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Tooltip & Popovers"
        breadcrumb={[
          {
            label: "Page Sections",
            route: "/sections/attention-catchers/tooltips-popovers",
          },
          { label: "Tooltip & Popovers" },
        ]}
      >
        <View title="Popovers" code={popoversCode}>
          <Popovers />
        </View>

        <View title="Tooltips" code={tooltipsCode}>
          <Tooltips />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default TooltipsPopovers;
