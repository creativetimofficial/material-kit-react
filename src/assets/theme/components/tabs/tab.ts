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
import typography from '../../base/typography';
import { borders } from '../../base/borders';
import { palette } from '../../base/colors';

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { grey } = palette;

const tab: {
  defaultProps?: ComponentsProps['MuiTab'];
  styleOverrides?: ComponentsOverrides['MuiTab'];
  variants?: ComponentsVariants['MuiTab'];
} = {
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: '1 1 auto',
      textAlign: 'center',
      maxWidth: 'unset !important',
      minWidth: 'unset !important',
      minHeight: 'unset !important',
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: 'none',
      lineHeight: 'inherit',
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${grey?.A700} !important`,
      opacity: '1 !important',

      '& .material-icons, .material-icons-round': {
        marginBottom: '0 !important',
        marginRight: pxToRem(6),
      },

      '& svg': {
        marginBottom: '0 !important',
        marginRight: pxToRem(6),
      },

      '& i.MuiTab-iconWrapper': {
        marginBottom: 0,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
export default tab;
