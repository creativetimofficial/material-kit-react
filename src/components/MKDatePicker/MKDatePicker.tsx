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

import React from "react";

// react-flatpickr components
import DatePicker from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Material Kit 2 React components
import { MKInput, MKInputProps } from "../MKInput";

export const MKDatePicker = ({ input, ...rest }: MKDatePickerProps): JSX.Element => (
  <DatePicker
    render={(props, ref) => <MKInput {...input} defaultValue={props} inputRef={ref} />}
    {...rest}
  />
);

// Setting default values for the props of MKDatePicker
MKDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the MKDatePicker
interface MKDatePickerProps {
  input: MKInputProps;
}
