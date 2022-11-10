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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import FavoriteIcon from '@mui/icons-material/Favorite';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKButton } from '../../../../../components/MKButton';

import React from 'react';

function ButtonsIconRight(): JSX.Element {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              Small
              <FavoriteIcon sx={{ ml: 1 }} />
            </MKButton>

            <MKButton color="info">
              default
              <FavoriteIcon sx={{ ml: 1 }} />
            </MKButton>

            <MKButton color="info" size="large">
              Large
              <FavoriteIcon sx={{ ml: 1 }} />
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsIconRight;
