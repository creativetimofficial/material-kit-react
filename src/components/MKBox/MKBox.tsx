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
  AvatarProps,
  BorderRadius,
  BoxProps,
  BoxShadowColor,
  GreyColorName,
  PaletteColorKey,
  ShadowSize,
} from "@mui/material";

// Custom styles for MKBox
import { MKBoxRoot } from "./MKBoxRoot";

export const MKBox = forwardRef<
  JSX.Element,
  React.PropsWithChildren<MKBoxProps & (BoxProps | AvatarProps)>
>(({ variant, bgColor, color, opacity, borderRadius, shadow, shadowColor, ...rest }, ref) => (
  <MKBoxRoot
    {...rest}
    ref={ref}
    ownerState={{
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      shadowColor,
    }}
  />
));

// Setting default values for the props of MKBox
MKBox.defaultProps = {
  variant: "contained",
  color: "primary",
  opacity: 1,
};

// Typechecking props for the MKBox
interface MKBoxProps {
  variant?: "gradient" | "contained";
  bgColor?:
    | GreyColorName
    | PaletteColorKey
    | "transparent"
    | "light"
    | "dark"
    | "default"
    | "inherit"
    | string;
  color?: GreyColorName | PaletteColorKey | "white" | "inherit" | string;
  opacity?: number;
  borderRadius?: keyof BorderRadius;
  shadow?: keyof ShadowSize;
  shadowColor?: keyof BoxShadowColor;
  to?: string;
  method?: string;
  autocomplete?: string;
  href?: string;
  target?: string;
  rel?: string;
}
