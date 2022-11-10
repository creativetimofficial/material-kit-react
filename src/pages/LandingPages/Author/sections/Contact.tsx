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
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
  faDribbble,
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKInput } from '../../../../../components/MKInput';
import { MKButton } from '../../../../../components/MKButton';
import { MKTypography } from '../../../../../components/MKTypography';

// Images
import bgImage from '../../../../../assets/images/examples/blog2.jpg';

function Contact(): JSX.Element {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: 'hidden' }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { grey, dark },
                    functions: { rgba, linearGradient },
                  }: Theme) =>
                    `${linearGradient(
                      rgba(grey?.A700, 0.8),
                      rgba(dark.dark, 0.8),
                    )}, url(${bgImage})`,

                  backgroundSize: 'cover',
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>

                    <MKTypography
                      variant="body2"
                      color="white"
                      opacity={0.8}
                      mb={3}
                    >
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </MKTypography>

                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <FontAwesomeIcon icon={faPhone} />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </MKTypography>
                    </MKBox>

                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </MKTypography>
                    </MKBox>

                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </MKTypography>
                    </MKBox>

                    <MKBox mt={3}>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ fontSize: '1.25rem' }}
                        />
                      </MKButton>

                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ fontSize: '1.25rem' }}
                        />
                      </MKButton>

                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <FontAwesomeIcon
                          icon={faDribbble}
                          style={{ fontSize: '1.25rem' }}
                        />
                      </MKButton>

                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ fontSize: '1.25rem' }}
                        />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>

              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Say Hi!
                    </MKTypography>

                    <MKTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </MKTypography>
                  </MKBox>

                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="What you love"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="info">
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
