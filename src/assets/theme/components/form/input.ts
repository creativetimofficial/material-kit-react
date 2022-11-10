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
import { borders } from "../../base/borders";

const { info, grey } = palette;
const { size } = typography;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: grey?.A700,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${"#d2d6da"}`,
      },

      "&:before": {
        borderColor: "#d2d6da",
      },

      "&:after": {
        borderColor: (info as SimplePaletteColorOptions)?.main,
      },
    },
  },
};
