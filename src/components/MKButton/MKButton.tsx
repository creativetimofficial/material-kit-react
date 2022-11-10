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

import { PaletteColorKey } from "@mui/material";
import React, { forwardRef } from "react";

import { ButtonProps } from "@mui/material/Button/Button";

// Custom styles for MKButton
import { MKButtonRoot } from "./MKButtonRoot";

export const MKButton = forwardRef<HTMLButtonElement, React.PropsWithChildren<MKButtonProps>>(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
    <MKButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </MKButtonRoot>
  )
);

// Setting default values for the props of MKButton
MKButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MKButton
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface MKButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined" | "gradient";
  color?: PaletteColorKey | "white" | "default";
  circular?: boolean;
  iconOnly?: boolean;
  component?: React.ElementType;
  to?: string;
  target?: string;
  rel?: string;
}
