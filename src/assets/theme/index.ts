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
import { createTheme, Theme } from '@mui/material';

// Material Kit 2 React base styles
import { palette } from './base/colors';
import breakpoints from './base/breakpoints';
import typography from './base/typography';
import { boxShadows } from './base/boxShadows';
import { borders } from './base/borders';
import globals from './base/globals';

// Material Kit 2 React helper functions
import { boxShadow } from './functions/boxShadow';
import { hexToRgb } from './functions/hexToRgb';
import { linearGradient } from './functions/linearGradient';
import { pxToRem } from './functions/pxToRem';
import { rgba } from './functions/rgba';

// Material Kit 2 React components base styles for @mui material components
import iconButton from './components/iconButton';
import tooltip from './components/tooltip';
import appBar from './components/appBar';
import container from './components/container';
import icon from './components/icon';
import svgIcon from './components/svgIcon';
import link from './components/link';

export const theme: Theme = {
  ...createTheme({
    breakpoints,
    palette,
    typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          globals,
          container,
        },
      },
      MuiIconButton: iconButton,
      MuiTooltip: tooltip,
      MuiAppBar: appBar,
      MuiIcon: icon,
      MuiSvgIcon: svgIcon,
      MuiLink: link,
    },
  }),
  borders,
  boxShadows,
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
};
