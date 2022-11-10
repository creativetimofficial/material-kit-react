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
import { MKProgress } from '../../../../../components/MKProgress';

function ProgressSimple(): JSX.Element {
  return (
    <MKBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <MKProgress color="primary" value={50} />
            <MKProgress color="secondary" value={50} />
            <MKProgress color="success" value={50} />
            <MKProgress color="info" value={50} />
            <MKProgress color="warning" value={50} />
            <MKProgress color="error" value={50} />
            <MKProgress color="dark" value={50} />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProgressSimple;
