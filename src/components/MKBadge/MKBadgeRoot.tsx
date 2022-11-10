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

import { PaletteColorKey } from '@mui/material';
// @mui material components
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

interface MKBadgeRootProps {
  ownerState: {
    color: PaletteColorKey | 'white';
    circular: string;
    border: string;
    size: string;
    indicator: string;
    variant: string;
    container: string;
    children: string;
  };
}

export const MKBadgeRoot = styled(Badge)<MKBadgeRootProps>(
  ({ theme, ownerState }) => {
    const { palette, typography, borders, functions } = theme;
    const {
      color,
      circular,
      border,
      size,
      indicator,
      variant,
      container,
      children,
    } = ownerState;

    const { grey } = palette;
    const { size: fontSize, fontWeightBold } = typography;
    const { borderRadius, borderWidth } = borders;
    const { pxToRem, linearGradient } = functions;

    // padding values
    const paddings = {
      xs: '0.45em 0.775em',
      sm: '0.55em 0.9em',
      md: '0.65em 1em',
      lg: '0.85em 1.375em',
    };

    // fontSize value
    const fontSizeValue = size === 'xs' ? fontSize.xxs : fontSize.xs;

    // border value
    const borderValue = border ? `${borderWidth[3]} solid white` : 'none';

    // borderRadius value
    const borderRadiusValue = circular ? borderRadius.section : borderRadius.lg;

    // styles for the badge with indicator={true}
    const indicatorStyles = () => {
      let widthValue = pxToRem(20);
      let heightValue = pxToRem(20);

      if (size === 'medium') {
        widthValue = pxToRem(24);
        heightValue = pxToRem(24);
      } else if (size === 'large') {
        widthValue = pxToRem(32);
        heightValue = pxToRem(32);
      }

      return {
        width: widthValue,
        height: heightValue,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        borderRadius: '50%',
        padding: 0,
        border: borderValue,
      };
    };

    // styles for the badge with variant="gradient"
    const gradientStyles = (colorProp: 'white' | PaletteColorKey) => {
      return {
        background: linearGradient(
          palette[colorProp].main,
          palette[colorProp].dark,
        ),
        color: colorProp === 'light' ? grey?.A700 : 'white',
      };
    };

    // styles for the badge with variant="contained"
    const containedStyles = (colorProp: 'white' | PaletteColorKey) => {
      let backgroundValue = palette[colorProp]
        ? palette[colorProp].background
        : palette.info.main;
      let colorValue = palette[colorProp]
        ? palette[colorProp].text
        : palette.info.text;

      if (colorProp === 'light') {
        colorValue = grey?.A700;
      } else if (colorProp === 'white') {
        backgroundValue = 'white';
        colorValue = grey?.A700;
      }

      return {
        background: backgroundValue,
        color: colorValue,
      };
    };

    // styles for the badge with no children and container={false}
    const standAloneStyles = (): any => ({
      position: 'static',
      marginLeft: pxToRem(8),
      transform: 'none',
      fontSize: pxToRem(9),
    });

    // styles for the badge with container={true}
    const containerStyles = (): any => ({
      position: 'relative',
      transform: 'none',
    });

    return {
      '& .MuiBadge-badge': {
        height: 'auto',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        padding: paddings[size] || paddings.xs,
        fontSize: fontSizeValue,
        fontWeight: fontWeightBold,
        textTransform: 'uppercase',
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        border: borderValue,
        borderRadius: borderRadiusValue,
        ...(indicator && indicatorStyles()),
        ...(variant === 'gradient' && gradientStyles(color)),
        ...(variant === 'contained' && containedStyles(color)),
        ...(!children && !container && standAloneStyles()),
        ...(container && containerStyles()),
      },
    };
  },
);
