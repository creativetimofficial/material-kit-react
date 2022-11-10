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
import React from 'react';

import { theme } from '../../../assets/theme';

// @mui material components
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';

// Material Kit 2 React examples
import Breadcrumbs from '../../../examples/Breadcrumbs';

// Sections components
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Breadcrumbs page components code
import breadcrumbsCode from '../../elements/breadcrumbs/code';

function BreadcrumbsEl(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Breadcrumbs"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/elements/breadcrumbs' },
          { label: 'Breadcrumbs' },
        ]}
      >
        <View title="Breadcrumbs" code={breadcrumbsCode}>
          <MKBox component="section" bgColor="white" py={8}>
            used
            <Container>
              <Grid container spacing={2} item xs={12} lg={10} mx="auto">
                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: 'Home',
                        route: '/sections/elements/breadcrumbs',
                      },
                    ]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: 'Home',
                        route: '/sections/elements/breadcrumbs',
                      },
                      { label: 'Library' },
                    ]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Breadcrumbs
                    routes={[
                      {
                        label: 'Home',
                        route: '/sections/elements/breadcrumbs',
                      },
                      {
                        label: 'Library',
                        route: '/sections/elements/breadcrumbs',
                      },
                      { label: 'Data' },
                    ]}
                  />
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default BreadcrumbsEl;
