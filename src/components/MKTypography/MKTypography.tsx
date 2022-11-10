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
import React, { forwardRef } from 'react';

import { TypographyProps } from '@mui/material/Typography/Typography';

import {
  FontWeight,
  PaletteColorKey,
  TextTransform,
  VerticalAlign,
} from '@mui/material';

// Custom styles for MKTypography
import { MKTypographyRoot } from './MKTypographyRoot';

export const MKTypography = forwardRef<
  HTMLSpanElement | HTMLLinkElement | HTMLElement,
  React.PropsWithChildren<MKTypographyProps & TypographyProps>
>(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      opacity,
      children,
      ...rest
    },
    ref,
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
  ),
);

// Setting default values for the props of MKTypography
MKTypography.defaultProps = {
  color: 'inherit',
  textTransform: undefined,
  verticalAlign: 'unset',
  textGradient: false,
  opacity: 1,
};

// Typechecking props for the MKTypography
interface MKTypographyProps {
  color?: PaletteColorKey | 'inherit' | 'text' | string;
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
