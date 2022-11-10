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

import { PaletteColor } from "@mui/material/styles/createPalette";
// Material Kit 2 React base styles
import { palette } from "../base/colors";

// Material Kit 2 React helper functions
import { rgba } from "../functions/rgba";

const { info } = palette;

const infoMain = (info as PaletteColor).main;
const infoContrastText = (info as PaletteColor).contrastText;

export default {
  ".flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus":
    {
      background: rgba(infoMain, 0.28),
      border: "none",
    },

  ".flatpickr-day.today": {
    background: infoMain,
    color: "white",
    border: "none",

    "&:hover, &:focus": {
      background: `${infoContrastText} !important`,
    },
  },

  ".flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus":
    {
      background: `${(info as PaletteColor).dark} !important`,
      color: "white",
      border: "none",
    },

  ".flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg":
    {
      color: `${infoMain} !important`,
      fill: `${infoMain} !important`,
    },
};
