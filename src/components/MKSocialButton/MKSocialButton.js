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

import { SocialPaletteOptions } from '@mui/material/styles';
import React, { forwardRef } from 'react';

// Custom styles for MKSocialButton
import { MKSocialButtonRoot } from './MKSocialButtonRoot';

export const MKSocialButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKSocialButtonProps>
>(({ color, size, iconOnly, circular, children, ...rest }, ref) => (
  <MKSocialButtonRoot
    {...rest}
    ref={ref}
    variant="contained"
    color="primary"
    size={size}
    ownerState={{ color, size, iconOnly, circular }}
  >
    {children}
  </MKSocialButtonRoot>
));

// Setting default values for the props of MKSocialButton
MKSocialButton.defaultProps = {
  size: 'medium',
  color: 'facebook',
  iconOnly: false,
  circular: false,
};

// Typechecking props for the MKSocialButton
interface MKSocialButtonProps {
  size?: 'small' | 'medium' | 'large';
  color: keyof SocialPaletteOptions;
  iconOnly?: boolean;
  circular?: boolean;
  component?: React.ElementType;
  href?: string;
  target?: string;
  sx?: any;
}
