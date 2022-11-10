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

import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsVariants } from "@mui/material/styles/variants";
// Material Kit 2 React base styles
import { borders } from "../base/borders";
import { palette } from "../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../functions/pxToRem";

const { borderRadius } = borders;

const linearProgress: {
  defaultProps?: ComponentsProps["MuiLinearProgress"];
  styleOverrides?: ComponentsOverrides["MuiLinearProgress"];
  variants?: ComponentsVariants["MuiLinearProgress"];
} = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: palette.grey?.["50"],
    },

    colorSecondary: {
      backgroundColor: palette.grey?.["50"],
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};
export default linearProgress;
