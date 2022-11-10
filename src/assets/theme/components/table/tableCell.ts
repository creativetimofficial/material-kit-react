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

// Material Kit 2 React base styles
import { borders } from "../../base/borders";
import { palette } from "../../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${palette.grey?.["50"]}`,
    },
  },
};
