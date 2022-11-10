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
import { borders } from "../../base/borders";
import { palette } from "../../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";
import { linearGradient } from "../../functions/linearGradient";

const { borderWidth, borderColor } = borders;
const { info } = palette;

const infoMain = (info as SimplePaletteColorOptions)?.main;

export default {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        width: pxToRem(20),
        height: pxToRem(20),
        color: "transparent",
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: "50%",
      },

      "&:after": {
        transition: "opacity 250ms ease-in-out",
        content: `""`,
        position: "absolute",
        width: pxToRem(14),
        height: pxToRem(14),
        borderRadius: "50%",
        backgroundImage: linearGradient(infoMain, infoMain),
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
      },

      "&:hover": {
        backgroundColor: "transparent",
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${infoMain} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      "&.Mui-checked": {
        color: infoMain,

        "& .MuiSvgIcon-root": {
          borderColor: infoMain,
        },

        "&:after": {
          opacity: 1,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      "&.Mui-checked": {
        color: infoMain,

        "& .MuiSvgIcon-root": {
          borderColor: infoMain,
        },

        "&:after": {
          opacity: 1,
        },
      },
    },
  },
};
