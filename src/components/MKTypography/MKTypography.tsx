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

import { TypographyProps } from "@mui/material/Typography/Typography";

import { FontWeight, PaletteColorKey, TextTransform, VerticalAlign } from "@mui/material";

// Custom styles for MKTypography
import { MKTypographyRoot } from "./MKTypographyRoot";

export const MKTypography = forwardRef<
  HTMLSpanElement | HTMLLinkElement | HTMLElement,
  React.PropsWithChildren<MKTypographyProps & TypographyProps>
>(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => (
    <MKTypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
      }}
    >
      {children}
    </MKTypographyRoot>
  )
);

// Setting default values for the props of MKTypography
MKTypography.defaultProps = {
  color: "inherit",
  textTransform: undefined,
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

// Typechecking props for the MKTypography
interface MKTypographyProps {
  color?: PaletteColorKey | "inherit" | "text" | string;
  fontWeight?: FontWeight;
  textTransform?: TextTransform;
  verticalAlign?: VerticalAlign;
  textGradient?: boolean;
  opacity?: number;
  component?: React.ElementType;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  size?: string;
}
