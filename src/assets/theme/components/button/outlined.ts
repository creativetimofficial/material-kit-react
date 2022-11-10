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
// Material Kit 2 React Base Styles
import { palette } from "../../base/colors";
import typography from "../../base/typography";

// Material Kit 2 React Helper Functions
import { pxToRem } from "../../functions/pxToRem";

const { info, secondary, grey } = palette;
const { size } = typography;

export default {
  base: {
    minHeight: pxToRem(40),
    color: grey?.["50"],
    borderColor: grey?.["50"],
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: "transparent",
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: "transparent",
    borderColor: (info as SimplePaletteColorOptions)?.main,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  secondary: {
    backgroundColor: "transparent",
    borderColor: (secondary as SimplePaletteColorOptions)?.main,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};
