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

// Toggles page components
import Toggle from "./components/Toggle";
import ToggleContext from "./components/ToggleContext";

// Toggles page components code
import toggleCode from "./components/Toggle/code";
import toggleContextCode from "./components/ToggleContext/code";

function Toggles(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Toggles"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/elements/toggles" },
          { label: "Toggles" },
        ]}
      >
        <View title="Toggle" code={toggleCode}>
          <Toggle />
        </View>

        <View title="Toggle context" code={toggleContextCode}>
          <ToggleContext />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Toggles;
