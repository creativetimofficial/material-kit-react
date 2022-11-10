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

import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';
// Material Kit 2 React base styles
import { boxShadows } from '../../base/boxShadows';
import typography from '../../base/typography';
import { palette } from '../../base/colors';
import { borders } from '../../base/borders';

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';

const { lg } = boxShadows;
const { size } = typography;
const { text } = palette;
const { borderRadius } = borders;

const menu: {
  defaultProps?: ComponentsProps['MuiMenu'];
  styleOverrides?: ComponentsOverrides['MuiMenu'];
  variants?: ComponentsVariants['MuiMenu'];
} = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: (text as SimplePaletteColorOptions)?.main,
      textAlign: 'left',
      backgroundColor: `white !important`,
      borderRadius: borderRadius.md,
    },
  },
};
export default menu;
