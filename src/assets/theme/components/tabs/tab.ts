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
import { borders } from "../../base/borders";
import { palette } from "../../base/colors";

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { grey } = palette;

const tab: {
  defaultProps?: ComponentsProps["MuiTab"];
  styleOverrides?: ComponentsOverrides["MuiTab"];
  variants?: ComponentsVariants["MuiTab"];
} = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${grey?.A700} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& i.MuiTab-iconWrapper": {
        marginBottom: 0,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
export default tab;
