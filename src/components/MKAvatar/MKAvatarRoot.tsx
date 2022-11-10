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
// @mui material components
import Avatar from "@mui/material/Avatar";
import { ShadowSize, styled } from "@mui/material/styles";

interface MKAvatarProps {
  ownerState: {
    shadow?: keyof ShadowSize;
    bgColor?: PaletteColorKey | "transparent";
    size?: keyof ShadowSize;
  };
}

export const MKAvatarRoot = styled(Avatar)<MKAvatarProps>(({ theme, ownerState }) => {
  const { palette, functions, typography, boxShadows } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightRegular } = typography;

  // backgroundImage value
  const backgroundValue = bgColor
    ? bgColor === "transparent"
      ? "transparent"
      : linearGradient(palette[bgColor].main, palette[bgColor].dark)
    : undefined;

  // size value
  let sizeValue;
  if (size) {
    switch (size) {
      case "xs":
        sizeValue = {
          width: pxToRem(24),
          height: pxToRem(24),
          fontSize: fontSize.xs,
        };
        break;
      case "sm":
        sizeValue = {
          width: pxToRem(36),
          height: pxToRem(36),
          fontSize: fontSize.sm,
        };
        break;
      case "lg":
        sizeValue = {
          width: pxToRem(58),
          height: pxToRem(58),
          fontSize: fontSize.sm,
        };
        break;
      case "xl":
        sizeValue = {
          width: pxToRem(74),
          height: pxToRem(74),
          fontSize: fontSize.md,
        };
        break;
      case "xxl":
        sizeValue = {
          width: pxToRem(110),
          height: pxToRem(110),
          fontSize: fontSize.md,
        };
        break;
      default: {
        sizeValue = {
          width: pxToRem(48),
          height: pxToRem(48),
          fontSize: fontSize.md,
        };
      }
    }
  }

  return {
    background: backgroundValue,
    color: "white",
    fontWeight: fontWeightRegular,
    boxShadow: shadow ? boxShadows[shadow] : "none",
    ...sizeValue,
  };
});
