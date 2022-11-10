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

/**
 * The base border styles for the Material Kit 2 React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Material Kit 2 React using thie file.
 */

// Material Kit 2 React Base Styles
import { palette } from './colors';

// Material Kit 2 React Helper Functions
import { pxToRem } from '../functions/pxToRem';
import { Borders } from '@mui/material/styles';

const { grey } = palette;

export const borders: Borders = {
  borderColor: grey ? grey[300] : undefined,

  borderWidth: {
    0: pxToRem(0),
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};
