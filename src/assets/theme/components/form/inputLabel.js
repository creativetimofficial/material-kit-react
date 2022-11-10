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

const { text, info } = palette;
const { size } = typography;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: (text as SimplePaletteColorOptions)?.main,
      lineHeight: 0.9,

      '&.Mui-focused': {
        color: (info as SimplePaletteColorOptions)?.main,
      },

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.5,
        fontSize: size.md,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.85em',
        },
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.6,
        fontSize: size.sm,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.72em',
        },
      },
    },
  },
};
