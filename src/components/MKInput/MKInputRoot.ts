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
// @mui material components
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

interface MKInputRootProps {
  ownerState: { error: boolean; success: boolean; disabled: boolean };
}

export const MKInputRoot = styled(TextField)<MKInputRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { error, success, disabled } = ownerState;

    const { grey, error: colorError, success: colorSuccess } = palette;
    const { pxToRem } = functions;

    // styles for the input with error={true}
    const errorStyles = () => ({
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline, &:after': {
          borderColor: (colorError as SimplePaletteColorOptions)?.main,
        },
      },

      '& .MuiInputLabel-root.Mui-focused': {
        color: (colorError as SimplePaletteColorOptions)?.main,
      },
    });

    // styles for the input with success={true}
    const successStyles = () => ({
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline, &:after': {
          borderColor: (colorSuccess as SimplePaletteColorOptions).main,
        },
      },

      '& .MuiInputLabel-root.Mui-focused': {
        color: (colorSuccess as SimplePaletteColorOptions).main,
      },
    });

    return {
      backgroundColor: disabled
        ? grey
          ? `${grey[200]} !important`
          : 'transparent'
        : 'transparent',
      pointerEvents: disabled ? 'none' : 'auto',
      ...(error && errorStyles()),
      ...(success && successStyles()),
    };
  },
);
