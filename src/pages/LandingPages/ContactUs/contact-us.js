/**
 * Copyright 2021 Bonitasoft S.A.
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
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import bgImage from '../assets/images/illustrations/illustration-reset.jpg';
import { theme } from '../assets/theme';
import { MKBox, MKButton, MKInput, MKTypography } from '../components';
import DefaultFooter from '../examples/Footers/DefaultFooter';
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import { footerRoutes } from '../footer.routes';
import { routes } from '../routes';

const ContactPage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MKBox position="fixed" top="0.5rem" width="100%">
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
      />
    </MKBox>

    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} lg={6}>
        <MKBox
          display={{ xs: 'none', lg: 'flex' }}
          width="calc(100% - 2rem)"
          height="calc(100vh - 2rem)"
          borderRadius="lg"
          ml={2}
          mt={2}
          sx={{ backgroundImage: `url(${bgImage})` }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        lg={6}
        xl={4}
        ml={{ xs: 'auto', lg: 6 }}
        mr={{ xs: 'auto', lg: 6 }}
      >
        <MKBox
          bgColor="default"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            shadowColor="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Contact us
            </MKTypography>
          </MKBox>

          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              For further questions, including partnership opportunities, please
              email hello@creative-tim.com or contact using our contact form.
            </MKTypography>

            <MKBox
              width="100%"
              component="form"
              method="post"
              autocomplete="off"
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Full Name"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="What can we help you?"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                item
                justifyContent="center"
                xs={12}
                mt={5}
                mb={2}
              >
                <MKButton type="submit" variant="gradient" color="info">
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </Grid>
    </Grid>

    <MKBox pt={6} px={1} mt={6}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </ThemeProvider>
);

export default ContactPage;
