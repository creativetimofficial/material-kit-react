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

// Material Kit 2 React components
import { MKTypography } from "../MKTypography";

// Custom styles for MKProgress
import { MKProgressRoot } from "./MKProgressRoot";

export const MKProgress = forwardRef<JSX.Element, React.PropsWithChildren<MKProgressProps>>(
  ({ variant, color, value, label, ...rest }, ref) => (
    <>
      {label && (
        <MKTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MKTypography>
      )}

      <MKProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

// Setting default values for the props of MKProgress
MKProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MKProgress
interface MKProgressProps {
  variant?: "gradient" | "contained";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  value?: number;
  label?: boolean;
}
