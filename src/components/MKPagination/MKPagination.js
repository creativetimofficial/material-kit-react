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

import React, { forwardRef, createContext, useContext } from 'react';
import { MKButtonProps } from '../MKButton';

// Material Kit 2 React components
import { MKBox } from '../MKBox';

// Custom styles for MKPagination
import { MKPaginationItemRoot } from './MKPaginationItemRoot';

// The Pagination main context
const Context: React.Context<any> = createContext(null);

export const MKPagination = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<MKPaginationProps & MKButtonProps>
>(
  (
    { item, variant, color, size, active, children, placement, ...rest },
    ref,
  ) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;
    let placementValue = 'flex-end';

    if (placement === 'left') {
      placementValue = 'flex-start';
    } else if (placement === 'center') {
      placementValue = 'center';
    }

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <MKPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context?.variant : 'outlined'}
            color={active ? context?.color : 'secondary'}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MKPaginationItemRoot>
        ) : (
          <MKBox
            display="flex"
            justifyContent={placementValue}
            alignItems="center"
            sx={{ listStyle: 'none' }}
          >
            {children}
          </MKBox>
        )}
      </Context.Provider>
    );
  },
);

// Setting default values for the props of MKPagination
MKPagination.defaultProps = {
  item: false,
  variant: 'gradient',
  color: 'info',
  size: 'medium',
  active: false,
  placement: 'right',
};

// Typechecking props for the MKPagination
interface MKPaginationProps {
  item?: boolean;
  variant?: 'gradient' | 'contained' | string;
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
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  placement?: 'left' | 'right' | 'center';
}
