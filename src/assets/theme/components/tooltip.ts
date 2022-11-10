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

// @mui material components
import Fade from '@mui/material/Fade';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

import { grey } from '@mui/material/colors';

// Material Kit 2 React base styles
import typography from '../base/typography';
import { borders } from '../base/borders';

// Material Kit 2 React helper functions
import { pxToRem } from '../functions/pxToRem';

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip: {
  defaultProps?: ComponentsProps['MuiTooltip'];
  styleOverrides?: ComponentsOverrides['MuiTooltip'];
  variants?: ComponentsVariants['MuiTooltip'];
} = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: grey[900],
      color: grey[50],
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: 'center',
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: grey[900],
    },
  },
};
export default tooltip;
