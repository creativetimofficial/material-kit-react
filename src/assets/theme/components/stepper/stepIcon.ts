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

// Material Kit 2 React helper functions
import { pxToRem } from "../../functions/pxToRem";
import { boxShadow } from "../../functions/boxShadow";

export default {
  styleOverrides: {
    root: {
      background: "#9fc9ff",
      fill: "#9fc9ff",
      stroke: "#9fc9ff",
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: "white",
        fill: "white",
        stroke: "white",
        borderColor: "white",
        boxShadow: boxShadow([0, 0], [0, 2], "white", 1),
      },

      "&.Mui-completed": {
        background: "white",
        fill: "white",
        stroke: "white",
        borderColor: "white",
        boxShadow: boxShadow([0, 0], [0, 2], "white", 1),
      },
    },
  },
};
