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

// Material Kit 2 React components
import { MKBox } from "../../../components/MKBox";

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Stats page components
import PaginationSimple from "./components/PaginationSimple";
import Paginations from "../../../components/Pagination/Pagination";

// Stats page components code
import paginationSimpleCode from "./components/PaginationSimple/code";

function Pagination(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Pagination"
        breadcrumb={[
          { label: "Page Sections", route: "/sections/navigation/pagination" },
          { label: "Pagination" },
        ]}
      >
        <View title="Pagination simple" code={paginationSimpleCode}>
          <MKBox py={3}>
            <PaginationSimple />
          </MKBox>
        </View>
        <View title="Pagination from Material UI Kit V1" code={""}>
          <MKBox py={3}>
            <Paginations
              pages={[
                { text: 1 },
                { text: "..." },
                { text: 5 },
                { text: 6 },
                { active: true, text: 7 },
                { text: 8 },
                { text: 9 },
                { text: "..." },
                { text: 12 },
              ]}
            />
          </MKBox>
          <MKBox py={3}>
            <Paginations
              pages={[
                { text: "PREV" },
                { text: 1 },
                { text: 2 },
                { active: true, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: "NEXT" },
              ]}
              color="info"
            />
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Pagination;
