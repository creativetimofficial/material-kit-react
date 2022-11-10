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
import { borders } from '../../base/borders';
import { boxShadows } from '../../base/boxShadows';
import { palette } from '../../base/colors';

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';
import { linearGradient } from '../../functions/linearGradient';

const { info } = palette;
const { borderRadius } = borders;
const { colored } = boxShadows;

export default {
  styleOverrides: {
    root: {
      background: linearGradient(
        (info as PaletteColor)?.main,
        (info as PaletteColor)?.dark,
      ),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      '&.MuiPaper-root': {
        backgroundColor: 'transparent',
      },
    },
  },
};
