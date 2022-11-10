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

import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { ComponentsProps } from "@mui/material/styles/props";
import { ComponentsVariants } from "@mui/material/styles/variants";

// Material Kit 2 React base styles
import typography from "../../base/typography";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";
import { rgba } from "../../functions/rgba";

const { size, fontWeightRegular } = typography;

const stepLabel: {
  defaultProps?: ComponentsProps["MuiStepLabel"];
  styleOverrides?: ComponentsOverrides["MuiStepLabel"];
  variants?: ComponentsVariants["MuiStepLabel"];
} = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba("white", 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba("white", 0.8)} !important`,
      },
    },
  },
};
export default stepLabel;
