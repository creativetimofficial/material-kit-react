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
// Material Kit 2 React Base Styles
import { palette } from '../../base/colors';
import typography from '../../base/typography';

// Material Kit 2 React Helper Functions
import { pxToRem } from '../../functions/pxToRem';

const { info, secondary, grey } = palette;
const { size } = typography;

export default {
  base: {
    minHeight: pxToRem(40),
    color: grey?.['50'],
    borderColor: grey?.['50'],
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    '&:hover': {
      opacity: 0.75,
      backgroundColor: 'transparent',
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: 'transparent',
    borderColor: (info as SimplePaletteColorOptions)?.main,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  secondary: {
    backgroundColor: 'transparent',
    borderColor: (secondary as SimplePaletteColorOptions)?.main,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
};
