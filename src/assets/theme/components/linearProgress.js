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

import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';
// Material Kit 2 React base styles
import { borders } from '../base/borders';
import { palette } from '../base/colors';

// Material Kit 2 React helper functions
import { pxToRem } from '../functions/pxToRem';

const { borderRadius } = borders;

const linearProgress: {
  defaultProps?: ComponentsProps['MuiLinearProgress'];
  styleOverrides?: ComponentsOverrides['MuiLinearProgress'];
  variants?: ComponentsVariants['MuiLinearProgress'];
} = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: 'visible',
      position: 'relative',
    },

    colorPrimary: {
      backgroundColor: palette.grey?.['50'],
    },

    colorSecondary: {
      backgroundColor: palette.grey?.['50'],
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: 'absolute',
      transform: `translate(0, 0) !important`,
      transition: 'width 0.6s ease !important',
    },
  },
};
export default linearProgress;
