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

// Material Kit 2 React helper functions
import { pxToRem } from '../../functions/pxToRem';
import { boxShadow } from '../../functions/boxShadow';

export default {
  styleOverrides: {
    root: {
      background: '#9fc9ff',
      fill: '#9fc9ff',
      stroke: '#9fc9ff',
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: '50%',
      zIndex: 99,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        background: 'white',
        fill: 'white',
        stroke: 'white',
        borderColor: 'white',
        boxShadow: boxShadow([0, 0], [0, 2], 'white', 1),
      },

      '&.Mui-completed': {
        background: 'white',
        fill: 'white',
        stroke: 'white',
        borderColor: 'white',
        boxShadow: boxShadow([0, 0], [0, 2], 'white', 1),
      },
    },
  },
};
