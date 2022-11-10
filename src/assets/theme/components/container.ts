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
import breakpoints from "../base/breakpoints";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const SM = `@media (min-width: ${sm}rem)`;
const MD = `@media (min-width: ${md}rem)`;
const LG = `@media (min-width: ${lg}rem)`;
const XL = `@media (min-width: ${xl}rem)`;
const XXL = `@media (min-width: ${xxl}rem)`;

const sharedClasses = {
  paddingRight: `2rem !important`,
  paddingLeft: `2rem !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative",
};

export default {
  [SM]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: `${sm}rem !important`,
    },
  },
  [MD]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: `${md}rem !important`,
    },
  },
  [LG]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: `${lg}rem !important`,
    },
  },
  [XL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: `${xl}rem !important`,
    },
  },
  [XXL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: `${xxl}rem !important`,
    },
  },
};
