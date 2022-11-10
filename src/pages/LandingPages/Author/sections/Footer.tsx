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

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faPinterest,
  faTwitter,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKTypography } from '../../../../../components/MKTypography';

function Footer(): JSX.Element {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: 'center', lg: 'left' }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography
              variant="h6"
              textTransform="uppercase"
              mb={{ xs: 2, lg: 3 }}
            >
              Material Design
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              pl={0}
              mb={3}
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </MKTypography>
              </MKBox>

              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </MKTypography>
              </MKBox>

              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </MKTypography>
              </MKBox>

              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </MKTypography>
              </MKBox>
            </Stack>

            <MKTypography variant="button" opacity={0.8}>
              Copyright © {new Date().getFullYear()}-2021 Material Design by
              Creative Tim.
            </MKTypography>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            ml="auto"
            textAlign={{ xs: 'center', lg: 'right' }}
          >
            <MKTypography
              variant="body1"
              fontWeight="bold"
              mb={6}
              sx={{ fontSize: '1.125rem' }}
            >
              The reward for getting on the stage is fame. The price of fame is
              you can't get off the stage.
            </MKTypography>
            <MKTypography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <FontAwesomeIcon icon={faDribbble} />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <FontAwesomeIcon icon={faPinterest} />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
            >
              <FontAwesomeIcon icon={faGithub} />
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
