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
import data from './data/designBlocksData';

import React from 'react';

function DesignBlocks(): JSX.Element {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>

          <MKTypography
            variant="body2"
            fontWeight="regular"
            color="secondary"
            mb={1}
            pr={2}
          >
            {description}
          </MKTypography>
        </MKBox>
      </Grid>

      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? '/' : route}>
                <ExampleCard
                  image={image}
                  name={name}
                  count={count}
                  pro={pro}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
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
            badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          />

          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of sections
          </MKTypography>

          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </MKTypography>
        </Grid>
      </Container>

      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
