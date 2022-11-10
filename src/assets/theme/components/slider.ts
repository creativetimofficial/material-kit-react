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
import { palette } from "../base/colors";
import { borders } from "../base/borders";
import { boxShadows } from "../base/boxShadows";

// Material Kit 2 React helper functions
import { pxToRem } from "../functions/pxToRem";
import { boxShadow } from "../functions/boxShadow";

const { grey, info } = palette;
const { borderRadius, borderWidth } = borders;
const { sliderBoxShadow } = boxShadows;

const infoMain = (info as SimplePaletteColorOptions)?.main;

const slider: {
  defaultProps?: ComponentsProps["MuiSlider"];
  styleOverrides?: ComponentsOverrides["MuiSlider"];
  variants?: ComponentsVariants["MuiSlider"];
} = {
  styleOverrides: {
    root: {
      width: "100%",

      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important",
      },

      "& .MuiSlider-valueLabel": {
        color: "Black",
      },
    },

    rail: {
      height: pxToRem(2),
      background: grey ? grey[200] : undefined,
      borderRadius: borderRadius.sm,
      opacity: 1,
    },

    track: {
      background: infoMain,
      height: pxToRem(2),
      position: "relative",
      border: "none",
      borderRadius: borderRadius.lg,
      zIndex: 1,
    },

    thumb: {
      width: pxToRem(14),
      height: pxToRem(14),
      backgroundColor: palette.background?.default,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${borderWidth[1]} solid ${infoMain}`,
      transition: "all 200ms linear",

      "&:hover": {
        boxShadow: "none",
      },

      "&:active": {
        transform: "translate(-50%, -50%) scale(1.4)",
      },

      "&.Mui-active": { boxShadow: boxShadow([0, 0], [0, 14], infoMain, 0.16) },
    },
  },
};
export default slider;
