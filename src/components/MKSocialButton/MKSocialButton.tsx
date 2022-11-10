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

import { SocialPaletteOptions } from "@mui/material/styles";
import React, { forwardRef } from "react";

// Custom styles for MKSocialButton
import { MKSocialButtonRoot } from "./MKSocialButtonRoot";

export const MKSocialButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKSocialButtonProps>
>(({ color, size, iconOnly, circular, children, ...rest }, ref) => (
  <MKSocialButtonRoot
    {...rest}
    ref={ref}
    variant="contained"
    color="primary"
    size={size}
    ownerState={{ color, size, iconOnly, circular }}
  >
    {children}
  </MKSocialButtonRoot>
));

// Setting default values for the props of MKSocialButton
MKSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the MKSocialButton
interface MKSocialButtonProps {
  size?: "small" | "medium" | "large";
  color: keyof SocialPaletteOptions;
  iconOnly?: boolean;
  circular?: boolean;
  component?: React.ElementType;
  href?: string;
  target?: string;
  sx?: any;
}
