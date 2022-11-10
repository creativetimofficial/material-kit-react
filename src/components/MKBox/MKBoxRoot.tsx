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
import { BorderRadius, Color, GreyColorName, PaletteColorKey, ShadowSize } from "@mui/material";
import Box from "@mui/material/Box";
import { BoxShadowColor, CustomPalette, Palette, styled } from "@mui/material/styles";
import { isGreyColorName, isPaletteColorName } from "../../types";

interface MKBoxRootProps {
  ownerState: {
    variant?: "gradient" | "contained";
    bgColor?:
      | PaletteColorKey
      | GreyColorName
      | "transparent"
      | "light"
      | "dark"
      | "default"
      | "inherit"
      | string;
    color?: PaletteColorKey | GreyColorName | "white" | "inherit" | string;
    opacity?: number;
    borderRadius?: keyof BorderRadius;
    shadow?: keyof ShadowSize;
    shadowColor?: keyof BoxShadowColor;
  };
}

const getGreyColor = (palette: Palette & CustomPalette, color: GreyColorName): string =>
  palette.grey[color.substr(5) as keyof Color];

const getColor = (
  palette: Palette & CustomPalette,
  color: PaletteColorKey | GreyColorName
): string => (isPaletteColorName(color) ? palette[color].main : getGreyColor(palette, color));

export const MKBoxRoot = styled(Box)<MKBoxRootProps>(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, shadowColor } = ownerState;

  // background value
  let backgroundValue;
  if (variant === "gradient") {
    backgroundValue = bgColor
      ? functions.linearGradient(palette[bgColor].main, palette[bgColor].dark)
      : "White";
  } else if (!bgColor || bgColor === "transparent") {
    backgroundValue = "transparent";
  } else if (bgColor === "inherit") {
    backgroundValue = "inherit";
  } else if (bgColor === "default") {
    backgroundValue = palette.background.default;
  } else if (isPaletteColorName(bgColor) || isGreyColorName(bgColor)) {
    backgroundValue = getColor(palette, bgColor);
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue;
  if (color && (isPaletteColorName(color) || isGreyColorName(color))) {
    colorValue = getColor(palette, color);
  } else if (bgColor === "inherit") {
    colorValue = "inherit";
  } else {
    colorValue = color;
  }

  // boxShadow value
  const boxShadowValue = shadow
    ? boxShadows[shadow]
    : shadowColor
    ? boxShadows.colored[shadowColor]
    : "none";

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadius ? borders.borderRadius[borderRadius] : "none",
    boxShadow: boxShadowValue,
  };
});

/*
interface MKBoxRootProps {
    ownerState: any;
}

export default styled(Box)<MKBoxRootProps>(({ theme, ownerState }) => {
    const { palette, functions, borders, boxShadows } = theme;
    const {
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
    } = ownerState;

    const { gradient, grey, white } = palette;
    const { linearGradient } = functions;
    const { borderRadius: radius } = borders;
    const { colored } = boxShadows;

    const greyColors = grey
        ? {
            'grey-100': grey[100],
            'grey-200': grey[200],
            'grey-300': grey[300],
            'grey-400': grey[400],
            'grey-500': grey[500],
            'grey-600': grey[600],
            'grey-700': grey[700],
            'grey-800': grey[800],
            'grey-900': grey[900],
        }
        : undefined;

    const validGradients = [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
    ];

    const validColors = [
        'transparent',
        'white',
        'black',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
        'text',
        'grey-100',
        'grey-200',
        'grey-300',
        'grey-400',
        'grey-500',
        'grey-600',
        'grey-700',
        'grey-800',
        'grey-900',
    ];

    const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section'];
    const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset'];

    // background value
    let backgroundValue = bgColor;

    if (variant === 'gradient') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const gradientBgColor = gradient[bgColor];
        backgroundValue = validGradients.find(el => el === bgColor)
            ? linearGradient(gradientBgColor.main, gradientBgColor.dark)
            : 'white';
    } else if (validColors.find(el => el === bgColor)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const paletteBgColor = palette[bgColor];

        backgroundValue = paletteBgColor
            ? paletteBgColor.main
            : greyColors
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                greyColors[bgColor]
                : undefined;
    } else {
        backgroundValue = bgColor;
    }

    // color value
    let colorValue = color;

    if (validColors.find(el => el === color)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        colorValue = palette[color]
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
            palette[color].main
            : greyColors
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                greyColors[color]
                : undefined;
    }

    // borderRadius value
    let borderRadiusValue = borderRadius;

    if (validBorderRadius.find(el => el === borderRadius)) {
        borderRadiusValue = radius[borderRadius];
    }

    // boxShadow value
    let boxShadowValue = 'none';

    if (validBoxShadows.find(el => el === shadow)) {
        boxShadowValue = boxShadows[shadow];
    } else if (coloredShadow) {
        boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none';
    }

    return {
        opacity,
        background: backgroundValue,
        color: colorValue,
        borderRadius: borderRadiusValue,
        boxShadow: boxShadowValue,
    };
});*/
