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
import { ArrowForward } from '@mui/icons-material';

// Material Kit 2 React components
import { MKBox, MKAvatar } from '../../../../../components';
import { MKButton } from '../../../../../components/MKButton';
import { MKTypography } from '../../../../../components/MKTypography';

// Images
import profilePicture from '../../../../../assets/images/bruce-mars.jpg';
import { Link } from '@mui/material';

function Profile(): JSX.Element {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Burce Mars"
              size="xxl"
              shadow="xl"
            />
          </MKBox>

          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <MKTypography variant="h3">Michael Roven</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton>
              </MKBox>

              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    323
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>

                <Grid item>
                  <MKTypography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    3.5k
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>

                <Grid item>
                  <MKTypography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    260
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>

              <MKTypography variant="body1" fontWeight="light" color="text">
                Decisions: If you can't decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Choose the
                path that leaves you more equanimous.
                <br />
                <MKTypography
                  component={Link}
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',

                    '& .material-icons-round': {
                      transform: `translateX(3px)`,
                      transition:
                        'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                    },

                    '&:hover .material-icons-round, &:focus .material-icons-round':
                      {
                        transform: `translateX(6px)`,
                      },
                  }}
                >
                  More about me
                  <ArrowForward sx={{ fontWeight: 'bold' }} />
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
