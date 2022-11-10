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

// Custom styles for the MKBadge
import { MKBadgeRoot } from './MKBadgeRoot';

export const MKBadge = forwardRef<
  HTMLSpanElement,
  React.PropsWithChildren<MKBadgeProps>
>(
  (
    {
      color,
      variant,
      size,
      circular,
      indicator,
      border,
      container,
      children,
      ...rest
    },
    ref,
  ) => (
    <MKBadgeRoot
      {...rest}
      ownerState={{
        color,
        variant,
        size,
        circular,
        indicator,
        border,
        container,
        children,
      }}
      ref={ref}
      color="default"
    >
      {children}
    </MKBadgeRoot>
  ),
);

// Setting default values for the props of MKBadge
MKBadge.defaultProps = {
  color: 'info',
  variant: 'gradient',
  size: 'sm',
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false,
};

// Typechecking props of the MKBadge
interface MKBadgeProps {
  color?:
    | 'white'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  badgeContent?: string;
  variant?: 'gradient' | 'contained';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  circular?: boolean;
  indicator?: boolean;
  border?: boolean;
  container?: boolean;
  sx?: object;
}
