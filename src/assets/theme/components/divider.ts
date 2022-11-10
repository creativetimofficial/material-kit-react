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

// Material Kit 2 React base styles
import { palette } from "../base/colors";

// Material Kit 2 React helper functions
import { rgba } from "../functions/rgba";
import { pxToRem } from "../functions/pxToRem";

const { grey } = palette;

export default {
  styleOverrides: {
    root: {
      background: rgba(grey!.A700!, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      background: rgba(grey!.A700!, 0.2),
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      background: rgba("white", 0.2),

      "&.MuiDivider-vertical": {
        background: rgba("white", 0.2),
      },
    },
  },
};
