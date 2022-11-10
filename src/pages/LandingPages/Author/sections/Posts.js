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

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKTypography } from '../../../../../components/MKTypography';

// Material Kit 2 React components
import TransparentBlogCard from '../../../../../examples/Cards/BlogCards/TransparentBlogCard';
import BackgroundBlogCard from '../../../../../examples/Cards/BlogCards/BackgroundBlogCard';

// Images
import post1 from '../../../../../assets/images/examples/testimonial-6-2.jpg';
import post2 from '../../../../../assets/images/examples/testimonial-6-3.jpg';
import post3 from '../../../../../assets/images/examples/blog-9-4.jpg';
import post4 from '../../../../../assets/images/examples/blog2.jpg';

import React from 'react';

function Places(): JSX.Element {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest blogposts
          </MKTypography>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Rover raised $65 million"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: 'internal',
                route: '/LandingPages/Author',
                color: 'info',
                label: 'read more',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: 'internal',
                route: '/LandingPages/Author',
                color: 'info',
                label: 'read more',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: 'internal',
                route: '/LandingPages/Author',
                color: 'info',
                label: 'read more',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: 'internal',
                route: '/LandingPages/Author',
                label: 'read more',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
