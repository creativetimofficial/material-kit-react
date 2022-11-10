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

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

interface MKAlertRootProps {
  ownerState: any;
}

export const MKAlertRoot = styled(Box)<MKAlertRootProps>(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { fontSize, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  // backgroundImage value
  const info: PaletteColor = palette[color].info as PaletteColor;
  const backgroundImageValue = palette[color]
    ? linearGradient(palette[color].main, palette[color].dark)
    : linearGradient(info.main, info.dark);

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: "white",
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSize,
    fontWeight: fontWeightMedium,
  };
});
