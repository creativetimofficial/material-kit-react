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
import { palette } from "../../base/colors";
import { borders } from "../../base/borders";
import { boxShadows } from "../../base/boxShadows";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { grey } = palette;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs: {
  defaultProps?: ComponentsProps["MuiTabs"];
  styleOverrides?: ComponentsOverrides["MuiTabs"];
  variants?: ComponentsVariants["MuiTabs"];
} = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey ? grey[100] : undefined,
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: "white",
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease",
    },
  },
};
export default tabs;
