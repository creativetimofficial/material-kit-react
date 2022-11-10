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
import typography from "../../base/typography";
import { borders } from "../../base/borders";
import { palette } from "../../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { size } = typography;
const { text } = palette;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: (text as SimplePaletteColorOptions)?.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
