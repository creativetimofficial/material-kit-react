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

// Material Kit 2 React Base Styles
import { borders } from "../../base/borders";
import { boxShadows } from "../../base/boxShadows";

// Material Kit 2 React Helper Function
import { rgba } from "../../functions/rgba";

const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card: {
  defaultProps?: ComponentsProps["MuiCard"];
  styleOverrides?: ComponentsOverrides["MuiCard"];
  variants?: ComponentsVariants["MuiCard"];
} = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: "white",
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba("black", 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};
export default card;
