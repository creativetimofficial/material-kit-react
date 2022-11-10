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
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

interface MKProgressRootProps {
  ownerState: { color: string; value: string; variant: string };
}

export const MKProgressRoot = styled(LinearProgress)<MKProgressRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { color, value, variant } = ownerState;

    const { text, info } = palette;
    const { linearGradient } = functions;

    // background value
    let backgroundValue;

    if (variant === "gradient") {
      backgroundValue = color
        ? linearGradient(palette[color].main, palette[color].dark)
        : linearGradient(info?.main, info?.dark);
    } else {
      backgroundValue = palette[color]?.main ?? info?.main;
    }

    return {
      width: "100%",

      "& .MuiLinearProgress-bar": {
        background: backgroundValue,
        width: `${value}%`,
        color: (text as SimplePaletteColorOptions)?.main,
      },
    };
  }
);
