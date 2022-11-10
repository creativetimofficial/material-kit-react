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

// Material Kit 2 React Base Styles
import typography from '../../base/typography';
import { borders } from '../../base/borders';

// Material Kit 2 React Helper Functions
import { pxToRem } from '../../functions/pxToRem';

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

export default {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: 'all 150ms ease-in',

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65,
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};
