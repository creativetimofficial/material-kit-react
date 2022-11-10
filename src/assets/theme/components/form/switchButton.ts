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

import { PaletteColor } from '@mui/material/styles/createPalette';
// Material Kit 2 React base styles
import { palette } from '../../base/colors';
import { borders } from '../../base/borders';
import { boxShadows } from '../../base/boxShadows';

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';
import { linearGradient } from '../../functions/linearGradient';

const { grey, info } = palette;
const { borderWidth } = borders;
const { md } = boxShadows;

const grey400 = grey ? grey[400] : undefined;

export default {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: grey?.A700,

      '&:hover': {
        backgroundColor: 'transparent',
      },

      '&.Mui-checked': {
        color: grey?.A700,

        '&:hover': {
          backgroundColor: 'transparent',
        },

        '& .MuiSwitch-thumb': {
          borderColor: `${grey?.A700} !important`,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: `${grey?.A700} !important`,
          borderColor: `${grey?.A700} !important`,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.3 !important',
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
        backgroundImage: linearGradient(
          (info as PaletteColor).main,
          (info as PaletteColor).dark,
        ),
      },
    },

    thumb: {
      backgroundColor: 'white',
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey400}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey400,
      border: `${borderWidth[1]} solid ${grey400}`,
      opacity: 1,
    },

    checked: {},
  },
};
