/**
 * Copyright 2022 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
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
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

interface MKButtonRootProps {
  ownerState: {
    color:
      | 'white'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark'
      | 'default';
    variant: 'text' | 'contained' | 'outlined' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    circular?: boolean;
    iconOnly?: boolean;
  };
}

export const MKButtonRoot = styled(Button)<MKButtonRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions, borders, boxShadows } = theme;
    const { color, variant, size, circular, iconOnly } = ownerState;

    const { text, grey } = palette;
    const { boxShadow, linearGradient, pxToRem, rgba } = functions;
    const { borderRadius } = borders;
    const { colored } = boxShadows;

    // styles for the button with variant="contained"
    const containedStyles = () => {
      // background color value
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const paletteColor = palette[color];
      const backgroundValue = paletteColor ? paletteColor.main : 'white';

      // backgroundColor value when button is focused
      const focusedBackgroundValue = paletteColor
        ? paletteColor.contrastText
        : 'white';

      // boxShadow value
      const coloredColor =
        color !== 'white' &&
        color !== 'light' &&
        color !== 'dark' &&
        color !== 'default' &&
        colored[color];
      const boxShadowValue = coloredColor
        ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, ${boxShadow(
            [0, 3],
            [1, -2],
            paletteColor.main,
            0.2,
          )}, ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
        : 'none';

      // boxShadow value when button is hovered
      const hoveredBoxShadowValue = coloredColor
        ? `${boxShadow(
            [0, 14],
            [26, -12],
            paletteColor.main,
            0.4,
          )}, ${boxShadow(
            [0, 4],
            [23, 0],
            paletteColor.main,
            0.15,
          )}, ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
        : 'none';

      // color value
      let colorValue = 'white';

      if (color === 'default' || !paletteColor) {
        colorValue = (text as SimplePaletteColorOptions)?.main;
      } else if (color === 'white' || color === 'light') {
        colorValue = grey?.A700;
      }

      // color value when button is focused
      let focusedColorValue = 'white';

      if (color === 'default') {
        focusedColorValue = (text as SimplePaletteColorOptions)?.main;
      } else if (color === 'white') {
        focusedColorValue = grey?.A700;
      } else if (color === 'primary' || color === 'error' || color === 'dark') {
        focusedColorValue = 'white';
      }

      return {
        background: backgroundValue,
        color: colorValue,
        boxShadow: boxShadowValue,

        '&:hover': {
          backgroundColor: backgroundValue,
          boxShadow: hoveredBoxShadowValue,
        },

        '&:focus:not(:hover)': {
          backgroundColor: focusedBackgroundValue,
          boxShadow: paletteColor
            ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
            : boxShadow([0, 0], [0, 3.2], 'white', 0.5),
        },

        '&:disabled': {
          backgroundColor: backgroundValue,
          color: focusedColorValue,
        },
      };
    };

    // styles for the button with variant="outlined"
    const outlinedStyles = () => {
      // background color value
      const backgroundValue =
        color === 'white' ? rgba('white', 0.1) : 'transparent';

      // color value
      const paletteColor = palette[color];
      const colorValue = paletteColor ? paletteColor.main : 'white';

      // boxShadow value
      const boxShadowValue = paletteColor
        ? boxShadow([0, 0], [0, 3.2], paletteColor.main, 0.5)
        : boxShadow([0, 0], [0, 3.2], 'white', 0.5);

      // border color value
      let borderColorValue = paletteColor
        ? paletteColor.main
        : rgba('white', 0.75);

      if (color === 'white') {
        borderColorValue = rgba('white', 0.75);
      }

      return {
        background: backgroundValue,
        color: colorValue,
        borderColor: borderColorValue,

        '&:hover': {
          background: 'transparent',
          borderColor: colorValue,
        },

        '&:focus:not(:hover)': {
          background: 'transparent',
          boxShadow: boxShadowValue,
        },

        '&:active:not(:hover)': {
          backgroundColor: colorValue,
          color: 'white',
          opacity: 0.85,
        },

        '&:disabled': {
          color: colorValue,
          borderColor: colorValue,
        },
      };
    };

    // styles for the button with variant="gradient"
    const gradientStyles = () => {
      // background value
      const backgroundValue =
        color === 'white' || !palette[color]
          ? 'white'
          : linearGradient(palette[color].main, palette[color].dark);

      // boxShadow value
      const paletteColor = palette[color];
      const boxShadowValue =
        color !== 'white' &&
        color !== 'light' &&
        color !== 'dark' &&
        color !== 'default' &&
        colored[color]
          ? `${boxShadow([0, 3], [3, 0], paletteColor.main, 0.15)}, ${boxShadow(
              [0, 3],
              [1, -2],
              paletteColor.main,
              0.2,
            )}, ${boxShadow([0, 1], [5, 0], paletteColor.main, 0.15)}`
          : 'none';

      // boxShadow value when button is hovered
      const hoveredBoxShadowValue =
        color !== 'white' &&
        color !== 'light' &&
        color !== 'dark' &&
        color !== 'default' &&
        colored[color]
          ? `${boxShadow(
              [0, 14],
              [26, -12],
              paletteColor.main,
              0.4,
            )}, ${boxShadow(
              [0, 4],
              [23, 0],
              paletteColor.main,
              0.15,
            )}, ${boxShadow([0, 8], [10, -5], paletteColor.main, 0.2)}`
          : 'none';

      // color value
      let colorValue: string | undefined = 'white';

      if (color === 'white') {
        colorValue = (text as SimplePaletteColorOptions)?.main;
      } else if (color === 'light') {
        colorValue = palette.dark.dark;
      }

      return {
        background: backgroundValue,
        color: colorValue,
        boxShadow: boxShadowValue,

        '&:hover': {
          backgroundColor: 'white',
          boxShadow: hoveredBoxShadowValue,
        },

        '&:focus:not(:hover)': {
          boxShadow: boxShadowValue,
        },

        '&:disabled': {
          background: backgroundValue,
          color: colorValue,
        },
      };
    };

    // styles for the button with variant="text"
    const textStyles = (): any => {
      // color value
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const paletteColor = palette[color];
      const colorValue = paletteColor ? paletteColor.main : 'white';

      // color value when button is focused
      const focusedColorValue = paletteColor
        ? paletteColor.contrastText
        : 'white';

      return {
        color: colorValue,
        '&:hover': {
          color: focusedColorValue,
        },

        '&:focus:not(:hover)': {
          color: focusedColorValue,
        },
      };
    };

    // styles for the button with circular={true}
    const circularStyles = () => ({
      borderRadius: borderRadius.section,
    });

    // styles for the button with iconOnly={true}
    const iconOnlyStyles = () => {
      // width, height, minWidth and minHeight values
      let sizeValue = pxToRem(38);

      if (size === 'small') {
        sizeValue = pxToRem(25.4);
      } else if (size === 'large') {
        sizeValue = pxToRem(52);
      }

      // padding value
      let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

      if (size === 'small') {
        paddingValue = pxToRem(4.5);
      } else if (size === 'large') {
        paddingValue = pxToRem(16);
      }

      return {
        width: sizeValue,
        minWidth: sizeValue,
        height: sizeValue,
        minHeight: sizeValue,
        padding: paddingValue,

        '& .material-icons': {
          marginTop: 0,
        },

        '&:hover, &:focus, &:active': {
          transform: 'none',
        },
      };
    };

    return {
      ...(variant === 'contained' && containedStyles()),
      ...(variant === 'outlined' && outlinedStyles()),
      ...(variant === 'gradient' && gradientStyles()),
      ...(variant === 'text' && textStyles()),
      ...(circular && circularStyles()),
      ...(iconOnly && iconOnlyStyles()),
    };
  },
);
