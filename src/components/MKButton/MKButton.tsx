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
import React, { forwardRef } from 'react';

import { ButtonProps } from '@mui/material/Button/Button';

// Custom styles for MKButton
import { MKButtonRoot } from './MKButtonRoot';

export const MKButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKButtonProps>
>(({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
  <MKButtonRoot
    {...rest}
    ref={ref}
    color="primary"
    variant={variant === 'gradient' ? 'contained' : variant}
    size={size}
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    ownerState={{ color, variant, size, circular, iconOnly }}
  >
    {children}
  </MKButtonRoot>
));

// Setting default values for the props of MKButton
MKButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'white',
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MKButton
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface MKButtonProps extends ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined' | 'gradient';
  color?: PaletteColorKey | 'white' | 'default';
  circular?: boolean;
  iconOnly?: boolean;
  component?: React.ElementType;
  to?: string;
  target?: string;
  rel?: string;
}
