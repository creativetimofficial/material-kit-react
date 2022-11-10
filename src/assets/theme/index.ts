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
import { createTheme, Theme } from "@mui/material";

// Material Kit 2 React base styles
import { palette } from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import { boxShadows } from "./base/boxShadows";
import { borders } from "./base/borders";
import globals from "./base/globals";

// Material Kit 2 React helper functions
import { boxShadow } from "./functions/boxShadow";
import { hexToRgb } from "./functions/hexToRgb";
import { linearGradient } from "./functions/linearGradient";
import { pxToRem } from "./functions/pxToRem";
import { rgba } from "./functions/rgba";

// Material Kit 2 React components base styles for @mui material components
import iconButton from "./components/iconButton";
import tooltip from "./components/tooltip";
import appBar from "./components/appBar";
import container from "./components/container";
import icon from "./components/icon";
import svgIcon from "./components/svgIcon";
import link from "./components/link";

export const theme: Theme = {
  ...createTheme({
    breakpoints,
    palette,
    typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          globals,
          container,
        },
      },
      MuiIconButton: iconButton,
      MuiTooltip: tooltip,
      MuiAppBar: appBar,
      MuiIcon: icon,
      MuiSvgIcon: svgIcon,
      MuiLink: link,
    },
  }),
  borders,
  boxShadows,
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
};
