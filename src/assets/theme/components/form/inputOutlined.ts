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
import { borders } from "../../base/borders";
import typography from "../../base/typography";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { info, grey } = palette;
const { borderRadius } = borders;
const { size } = typography;

const grey700 = grey ? grey[700] : undefined;

export default {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#d2d6da",
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: (info as SimplePaletteColorOptions)?.main,
        },
      },
    },

    notchedOutline: {
      borderColor: "#d2d6da",
    },

    input: {
      color: grey700,
      padding: pxToRem(12),
      backgroundColor: "transparent",
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey700,
      padding: 0,
    },
  },
};
