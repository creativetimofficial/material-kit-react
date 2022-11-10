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

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKTypography } from '../../../../../components/MKTypography';
import { MKInput } from '../../../../../components/MKInput';
import { MKButton } from '../../../../../components/MKButton';

// Images
import macbook from '../../../../../assets/images/macbook.png';

import React from 'react';

function Newsletter(): React.ReactElement {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            md={6}
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}
          >
            <MKTypography variant="h4">
              Be the first to see the news
            </MKTypography>

            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </MKTypography>

            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>

              <Grid item xs={4}>
                <MKButton
                  variant="gradient"
                  color="info"
                  sx={{ height: '100%' }}
                >
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} sx={{ ml: 'auto' }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
