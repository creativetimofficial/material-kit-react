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

import { PaletteColor } from "@mui/material/styles/createPalette";

// Material Kit 2 React base styles
import { borders } from "../../base/borders";
import { boxShadows } from "../../base/boxShadows";
import { palette } from "../../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";
import { linearGradient } from "../../functions/linearGradient";

const { info } = palette;
const { borderRadius } = borders;
const { colored } = boxShadows;

export default {
  styleOverrides: {
    root: {
      background: linearGradient((info as PaletteColor)?.main, (info as PaletteColor)?.dark),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: "transparent",
      },
    },
  },
};
