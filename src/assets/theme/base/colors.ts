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

import { CustomPaletteOptions, SocialPaletteOptions } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customized the colors for the entire Material Kit 2 React using the file.
 *
 * @see https://material-ui.com/customization/color/
 */
export const palette: PaletteOptions & CustomPaletteOptions & SocialPaletteOptions = {
  mode: "light",

  background: {
    default: "#f0f2f5",
    paper: "#ffffff",
  },

  common: {
    black: "#ffffff",
    white: "#000000",
  },

  text: {
    primary: "#000000",
    secondary: "#DBEFFF",
    disabled: "#7b809a",
  },

  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  // See https://mui.com/material-ui/customization/palette/#providing-the-colors-directly
  primary: {
    main: "#002395",
    light: "#DBEFFF",
    contrastText: "#DBEFFF",
  },

  secondary: {
    main: "#E20613",
    dark: "#E20613",
    light: "#F9DADC",
    contrastText: "#F9DADC",
  },

  info: {
    main: "#1A73E8",
    light: "#69a1ff",
    dark: "#0049b5",
    contrastText: "#ffffff",
  },

  success: {
    main: "#4CAF50",
    light: "#80e27e",
    dark: "#087f23",
    contrastText: "#000000",
  },

  warning: {
    main: "#fb8c00",
    light: "#ffbd45",
    dark: "#c25e00",
    contrastText: "#000000",
  },

  error: {
    main: "#F44335",
    light: "#ff7960",
    dark: "#b9000b",
    contrastText: "#000000",
  },

  grey: {
    "100": "#f8f9fa",
    "200": "#f0f2f5",
    "300": "#dee2e6",
    "400": "#ced4da",
    "500": "#adb5bd",
    "600": "#6c757d",
    "700": "#495057",
    "800": "#343a40",
    "900": "#212529",
  },

  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  tertiary: {
    main: "#ccd6dd",
    light: "#ffffff",
    dark: "#9ba5ab",
    contrastText: "#000000",
  },

  light: {
    main: "#EDEEF5",
    contrastText: "#f0f2f5",
    dark: "#f0f2f5",
  },

  dark: {
    main: "#344767",
    contrastText: "#2c3c58",
    dark: "#2c3c58",
  },

  spicy: {
    main: "#05D99E",
  },
  sweet: {
    main: "#FFD560",
  },
  manufacture: {
    main: "#E86A63",
  },
  education: {
    main: "#FFD560",
  },
  telecom: {
    main: "#F1ACC6",
  },
  financial: {
    main: "#62BFEC",
  },
  energy: {
    main: "#2A574A",
  },
  health: {
    main: "#05D99E",
  },
  government: {
    main: "#86BEC2",
  },
  distribution: {
    main: "#7E4F95",
  },

  facebook: {
    main: "#3b5998",
    dark: "#344e86",
  },

  twitter: {
    main: "#55acee",
    dark: "#3ea1ec",
  },

  instagram: {
    main: "#125688",
    dark: "#0e456d",
  },

  linkedin: {
    main: "#0077b5",
    dark: "#00669c",
  },

  pinterest: {
    main: "#cc2127",
    dark: "#b21d22",
  },

  youtube: {
    main: "#e52d27",
    dark: "#d41f1a",
  },

  slack: {
    main: "#3aaf85",
    dark: "#329874",
  },

  dribbble: {
    main: "#ea4c89",
    dark: "#e73177",
  },

  github: {
    main: "#24292e",
    dark: "#171a1d",
  },

  reddit: {
    main: "#ff4500",
    dark: "#e03d00",
  },

  tumblr: {
    main: "#35465c",
    dark: "#2a3749",
  },
};
