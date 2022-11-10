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
// Material Kit 2 React base styles
import { palette } from "../../base/colors";
import { borders } from "../../base/borders";
import typography from "../../base/typography";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { text, grey } = palette;
const { borderRadius } = borders;
const { size } = typography;

export default {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: (text as SimplePaletteColorOptions)?.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: grey?.["50"],
        color: grey?.A700,
      },
    },
  },
};
