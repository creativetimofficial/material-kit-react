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
import { palette } from '../../base/colors';
import typography from '../../base/typography';

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';

const { grey } = palette;
const { size, fontWeightBold } = typography;

export default {
  styleOverrides: {
    root: {
      display: 'block',
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: 'inline-block',
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: grey?.A700,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      '&.Mui-disabled': {
        color: grey?.A700,
      },
    },
  },
};
