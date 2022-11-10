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
const { text, grey } = palette;
const { borderRadius } = borders;

const autocomplete: {
  defaultProps?: ComponentsProps["MuiAutocomplete"];
  styleOverrides?: ComponentsOverrides["MuiAutocomplete"];
  variants?: ComponentsVariants["MuiAutocomplete"];
} = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text?.primary,
      textAlign: "left",
      backgroundColor: `white !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: "none",
      backgroundColor: "transparent",
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text?.primary,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: grey?.["50"],
        color: grey?.A700,
      },

      '&[aria-selected="true"]': {
        backgroundColor: `${grey?.["50"]} !important`,
        color: `${grey?.A700} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text?.primary,
    },

    groupLabel: {
      color: grey?.A700,
    },

    loading: {
      fontSize: size.sm,
      color: text?.primary,
    },

    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: pxToRem(4),
      backgroundColor: (palette.dark as PaletteColor).contrastText,
      color: "white",

      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: "white",
        marginRight: 0,
      },
    },
  },
};
export default autocomplete;
