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

import { Theme } from '@mui/material';
import React, { useState } from 'react';

// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Material Kit 2 React components
import { MKBox } from '../components/MKBox';
import { MKTypography } from '../components/MKTypography';
import { MKInput } from '../components/MKInput';
import { MKButton } from '../components/MKButton';

// Material Kit 2 React example components
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import SimpleFooter from '../examples/Footers/SimpleFooter';

// Images
import bgImage from '../assets/images/bg-sign-in-basic.jpeg';

import { theme } from '../assets/theme';

import { routes } from '../routes';

import { Link } from 'gatsby';

const SignInPage = (): JSX.Element => {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = (): void => setRememberMe(!rememberMe);

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
        isTransparent
        light
      />

      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { dark, grey },
          }: Theme) =>
            `${linearGradient(
              rgba(grey?.A700, 0.6),
              rgba(dark.dark, 0.6),
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                shadowColor="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Sign in
                </MKTypography>

                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  sx={{ mt: 1, mb: 2 }}
                >
                  <Grid item xs={2}>
                    <MKTypography
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>

                  <Grid item xs={2}>
                    <MKTypography
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>

                  <Grid item xs={2}>
                    <MKTypography
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>

              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox>

                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch
                      checked={rememberMe}
                      onChange={handleSetRememberMe}
                    />

                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      sign in
                    </MKButton>
                  </MKBox>

                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{' '}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </ThemeProvider>
  );
};

export default SignInPage;
