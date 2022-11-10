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

import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsVariants } from "@mui/material/styles/variants";
// Material Kit 2 React base styles
import { boxShadows } from "../../base/boxShadows";
import typography from "../../base/typography";
import { palette } from "../../base/colors";
import { borders } from "../../base/borders";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { lg } = boxShadows;
const { size } = typography;
const { text } = palette;
const { borderRadius } = borders;

const menu: {
  defaultProps?: ComponentsProps["MuiMenu"];
  styleOverrides?: ComponentsOverrides["MuiMenu"];
  variants?: ComponentsVariants["MuiMenu"];
} = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: (text as SimplePaletteColorOptions)?.main,
      textAlign: "left",
      backgroundColor: `white !important`,
      borderRadius: borderRadius.md,
    },
  },
};
export default menu;
