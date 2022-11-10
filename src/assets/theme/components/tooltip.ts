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

// @mui material components
import Fade from "@mui/material/Fade";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsVariants } from "@mui/material/styles/variants";

import { grey } from "@mui/material/colors";

// Material Kit 2 React base styles
import typography from "../base/typography";
import { borders } from "../base/borders";

// Material Kit 2 React helper functions
import { pxToRem } from "../functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip: {
  defaultProps?: ComponentsProps["MuiTooltip"];
  styleOverrides?: ComponentsOverrides["MuiTooltip"];
  variants?: ComponentsVariants["MuiTooltip"];
} = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: grey[900],
      color: grey[50],
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: grey[900],
    },
  },
};
export default tooltip;
