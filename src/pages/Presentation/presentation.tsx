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

import { Apps, Flag, PrecisionManufacturing } from '@mui/icons-material';
import { Theme } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {
  faPinterest,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import { MKBox } from '../components/MKBox';
import { MKTypography } from '../components/MKTypography';
import { MKSocialButton } from '../components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../examples/Footers/DefaultFooter';
import FilledInfoCard from '../examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
import Counters from '../layouts/pages/presentation/sections/Counters';
import Information from '../layouts/pages/presentation/sections/Information';
import DesignBlocks from '../layouts/pages/presentation/sections/DesignBlocks';
import Pages from '../layouts/pages/presentation/sections/Pages';
import Testimonials from '../layouts/pages/presentation/sections/Testimonials';
import Download from '../layouts/pages/presentation/sections/Download';

// Presentation page components
import BuiltByDevelopers from '../layouts/pages/presentation/components/BuiltByDevelopers';

// Material Kit 2 React themes
import { theme } from '../assets/theme';

// Routes
import { footerRoutes } from '../footer.routes';
import { routes } from '../routes';

// Images
import bgImage from '../assets/images/bg-presentation.jpg';

const Presentation = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography }) => ({
                [breakpoints.down('md')]: {
                  fontSize: typography.size['3xl'],
                },
              })}
            >
              Material Kit 2 React
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join
              over 1.6 million developers around the world.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ functions: { rgba } }: Theme) =>
            rgba('white', 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }: Theme) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />

        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon={<Flag />}
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start",
                }}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon={<PrecisionManufacturing />}
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                  label: 'Read more',
                }}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon={<Apps />}
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: 'external',
                  route:
                    'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />

        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                ml="auto"
                sx={{ textAlign: { xs: 'center', lg: 'left' } }}
              >
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>

                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: 'auto' }}
                mr={{ xs: 0, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
              >
                <MKSocialButton
                  component={Link}
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component={Link}
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component={Link}
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </ThemeProvider>
  );
};

export default Presentation;
