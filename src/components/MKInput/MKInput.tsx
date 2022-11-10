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

import React, { forwardRef } from "react";

import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
} from "@mui/material/TextField/TextField";

// Custom styles for MKInput
import { MKInputRoot } from "./MKInputRoot";

export const MKInput = forwardRef<
  HTMLDivElement,
  | (MKInputProps & StandardTextFieldProps)
  | (MKInputProps & FilledTextFieldProps)
  | (MKInputProps & OutlinedTextFieldProps)
>(({ error, success, disabled, ...rest }, ref) => (
  <MKInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MKInput
MKInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MKInput
export interface MKInputProps {
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}
