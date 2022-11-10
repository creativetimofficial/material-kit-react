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
import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox } from '../../../../components/MKBox';
import { MKBadge } from '../../../../components/MKBadge';
import { MKTypography } from '../../../../components/MKTypography';

// Presentation page components
import ExampleCard from '../components/ExampleCard';

// Data
import data from './data/pagesData';

import React from 'react';

function Pages(): JSX.Element {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard
          image={image}
          name={name}
          display="grid"
          minHeight="auto"
        />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        >
          <MKBadge
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant="contained"
            color="info"
            badgeContent="boost creativity"
            container
            sx={{ mb: 2 }}
          />

          <MKTypography variant="h2" fontWeight="bold">
            With our coded pages
          </MKTypography>

          <MKTypography variant="body1" color="text">
            The easiest way to get started is to use one of our
            <br /> pre-built example pages.
          </MKTypography>
        </Grid>
      </Container>

      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </MKTypography>

              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                These is just a small selection of the multiple possibitilies
                you have. Focus on the business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
