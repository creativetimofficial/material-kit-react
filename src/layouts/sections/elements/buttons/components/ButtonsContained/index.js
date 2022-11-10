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
import React from 'react';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKButton } from '../../../../../components/MKButton';

function ButtonsContained(): JSX.Element {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton color="primary">primary</MKButton>
            <MKButton color="secondary">secondary</MKButton>
            <MKButton color="info">info</MKButton>
            <MKButton color="success">success</MKButton>
            <MKButton color="warning">warning</MKButton>
            <MKButton color="error">error</MKButton>
            <MKButton color="light">light</MKButton>
            <MKButton color="dark">dark</MKButton>
            <MKButton color="white">White</MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsContained;
