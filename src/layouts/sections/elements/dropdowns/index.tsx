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

// Dropdowns page components
import DropdownAndDropup from "./components/DropdownAndDropup";

// Dropdowns page components code
import dropdownAndDropupCode from "./components/DropdownAndDropup/code";

function Dropdowns(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Dropdowns"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/elements/dropdowns" },
          { label: "Dropdowns" },
        ]}
      >
        <View title="Dropdown and Dropup" code={dropdownAndDropupCode}>
          <DropdownAndDropup />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Dropdowns;
