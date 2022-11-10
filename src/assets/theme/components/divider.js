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

// Material Kit 2 React base styles
import { palette } from '../base/colors';

// Material Kit 2 React helper functions
import { rgba } from '../functions/rgba';
import { pxToRem } from '../functions/pxToRem';

const { grey } = palette;

export default {
  styleOverrides: {
    root: {
      background: rgba(grey!.A700!, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: 'none',
      opacity: 0.25,
    },

    vertical: {
      background: rgba(grey!.A700!, 0.2),
      width: pxToRem(1),
      height: '100%',
      margin: `0 ${pxToRem(16)}`,
      borderRight: 'none',
    },

    light: {
      background: rgba('white', 0.2),

      '&.MuiDivider-vertical': {
        background: rgba('white', 0.2),
      },
    },
  },
};
