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
import {
  TouchApp,
  ContentCopy,
  FlipToFront,
  PriceChange,
  Devices,
} from '@mui/icons-material';

// Material Kit 2 React components
import { MKBox } from '../../../../components/MKBox';

// Material Kit 2 React examples
import RotatingCard from '../../../../examples/Cards/RotatingCard';
import RotatingCardFront from '../../../../examples/Cards/RotatingCard/RotatingCardFront';
import RotatingCardBack from '../../../../examples/Cards/RotatingCard/RotatingCardBack';
import DefaultInfoCard from '../../../../examples/Cards/InfoCards/DefaultInfoCard';

// Images
import bgFront from '../../../../assets/images/rotating-card-bg-front.jpeg';
import bgBack from '../../../../assets/images/rotating-card-bg-back.jpeg';

import React from 'react';

function Information(): JSX.Element {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: 'auto' }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon={<TouchApp />}
                title={
                  <>
                    <br />
                    Feel the Material Kit
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: 'internal',
                  route: '/sections/page-sections/page-headers',
                  label: 'start with header',
                }}
              />
            </RotatingCard>
          </Grid>

          <Grid item xs={12} lg={7} sx={{ ml: 'auto' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<ContentCopy />}
                  title="Full Documentation"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<FlipToFront />}
                  title="MUI Ready"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<PriceChange />}
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<Devices />}
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
