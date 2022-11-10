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
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { FontWeight, PaletteColorKey, TextTransform, VerticalAlign } from "@mui/material";

import { isPaletteColorName } from "../../types";

interface MKTypographyRootProps {
  ownerState: {
    color?: PaletteColorKey | "inherit" | "text" | string;
    textTransform?: TextTransform;
    verticalAlign?: VerticalAlign;
    fontWeight?: FontWeight;
    opacity?: number;
    textGradient?: boolean;
  };
}

export const MKTypographyRoot = styled(Typography)<MKTypographyRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient } = ownerState;

    const { linearGradient } = functions;

    const calculatedColor =
      !color || color === "inherit"
        ? "inherit"
        : color === "text"
        ? palette.text.primary
        : isPaletteColorName(color)
        ? palette[color].main
        : color;
    return {
      opacity,
      textTransform: textTransform ?? "none",
      verticalAlign,
      textDecoration: "none",
      color: calculatedColor,
      letterSpacing: "-0.125px",
      fontWeight: fontWeight,
      ...(textGradient && {
        backgroundImage:
          color && isPaletteColorName(color)
            ? linearGradient(palette[color].main, palette[color].dark)
            : linearGradient(palette.grey?.A500, palette.grey?.A700),
        display: "inline-block",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        position: "relative",
        zIndex: 1,
      }),
    };
  }
);
