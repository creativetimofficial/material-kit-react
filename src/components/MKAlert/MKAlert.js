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

import { BoxProps, PaletteColorKey } from '@mui/material';
import React, { useState } from 'react';

// @mui material components
import Fade from '@mui/material/Fade';

// Material Kit 2 React components
import { MKBox } from '../MKBox';

// Custom styles for the MKAlert
import { MKAlertRoot } from './MKAlertRoot';
import { MKAlertCloseIcon } from './MKAlertCloseIcon';

export const MKAlert = ({
  color,
  dismissible,
  children,
  ...rest
}: React.PropsWithChildren<MKAlertProps & BoxProps>): JSX.Element => {
  const [alertStatus, setAlertStatus] = useState('mount');

  const handleAlertStatus = (): void => setAlertStatus('fadeOut');

  // The base template for the alert
  const alertTemplate = (mount = true): JSX.Element => (
    <Fade in={mount} timeout={300}>
      <MKAlertRoot ownerState={{ color }} {...rest}>
        <MKBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === 'light' ? 'dark' : 'white'}
        >
          {children}
        </MKBox>
        {dismissible ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <MKAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </MKAlertCloseIcon>
        ) : null}
      </MKAlertRoot>
    </Fade>
  );

  switch (alertStatus) {
    case 'mount':
      return alertTemplate();
    case 'fadeOut':
      setTimeout(() => setAlertStatus('unmount'), 400);
      return alertTemplate(false);
    default:
      return alertTemplate();
  }
};

// Setting default values for the props of MKAlert
MKAlert.defaultProps = {
  color: 'info',
  dismissible: false,
};

// Typechecking props of the MKAlert
interface MKAlertProps {
  color?: PaletteColorKey;
  dismissible?: boolean;
}
