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

import { AvatarProps, PaletteColorKey, ShadowSize } from "@mui/material";
import React from "react";
import { forwardRef } from "react";

// Custom styles for MKAvatar
import { MKAvatarRoot } from "./MKAvatarRoot";

export const MKAvatar = forwardRef<HTMLDivElement, MKAvatarProps & AvatarProps>(
  ({ bgColor, size, shadow, ...rest }, ref) => (
    <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
  )
);

// Setting default values for the props of MKAvatar
MKAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: undefined,
};

// Typechecking props for the MKAvatar
interface MKAvatarProps {
  bgColor?: PaletteColorKey | "transparent";
  size?: keyof ShadowSize;
  shadow?: keyof ShadowSize;
}
