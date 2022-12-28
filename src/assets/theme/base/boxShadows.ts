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

/**
 * The base box-shadow styles for the Material Kit 2 React.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Material Kit 2 React using thie file.
 */
import grey from "@mui/material/colors/grey";
import { PaletteColor } from "@mui/material/styles";

// Material Kit 2 React Helper Functions
import { boxShadow } from "../functions/boxShadow";

import { palette } from "./colors";

export const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], grey[900], 0.15),
  sm: boxShadow([0, 5], [10, 0], grey[900], 0.12),
  md: `${boxShadow([0, 4], [6, -1], grey[900], 0.1)}, ${boxShadow(
    [0, 2],
    [4, -1],
    grey[900],
    0.06
  )}`,
  lg: `${boxShadow([0, 10], [15, -3], grey[900], 0.1)}, ${boxShadow(
    [0, 4],
    [6, -2],
    grey[900],
    0.05
  )}`,
  xl: `${boxShadow([0, 20], [25, -5], grey[900], 0.1)}, ${boxShadow(
    [0, 10],
    [10, -5],
    grey[900],
    0.04
  )}`,
  xxl: boxShadow([0, 20], [27, 0], grey[900], 0.05),
  inset: boxShadow([0, 1], [2, 0], grey[900], 0.075, "inset"),
  colored: {
    primary: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.primary as PaletteColor).main,
      0.4
    )}`,
    secondary: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.secondary as PaletteColor).main,
      0.4
    )}`,
    tertiary: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.tertiary as PaletteColor).main,
      0.4
    )}`,
    info: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.info as PaletteColor).main,
      0.4
    )}`,
    success: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.success as PaletteColor).main,
      0.4
    )}`,
    warning: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.warning as PaletteColor).main,
      0.4
    )}`,
    error: `${boxShadow([0, 4], [20, 0], grey[900], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      (palette.error as PaletteColor).main,
      0.4
    )}`,
    white: `${boxShadow([0, 4], [20, 0], grey[50], 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      grey[50],
      0.4
    )}`,
  },

  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], grey[900], 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], "#ddd", 1),
  },
};