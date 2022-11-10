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
import { palette } from "../../base/colors";
import { borders } from "../../base/borders";
import { boxShadows } from "../../base/boxShadows";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";
import { linearGradient } from "../../functions/linearGradient";

const { grey, info } = palette;
const { borderWidth } = borders;
const { md } = boxShadows;

const grey400 = grey ? grey[400] : undefined;

export default {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: grey?.A700,

      "&:hover": {
        backgroundColor: "transparent",
      },

      "&.Mui-checked": {
        color: grey?.A700,

        "&:hover": {
          backgroundColor: "transparent",
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${grey?.A700} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${grey?.A700} !important`,
          borderColor: `${grey?.A700} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient((info as PaletteColor).main, (info as PaletteColor).dark),
      },
    },

    thumb: {
      backgroundColor: "white",
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey400}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey400,
      border: `${borderWidth[1]} solid ${grey400}`,
      opacity: 1,
    },

    checked: {},
  },
};
