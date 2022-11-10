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
import { ArrowForward } from '@mui/icons-material';
import { Link, Theme } from '@mui/material';
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import { MKBox } from '../../../../../components/MKBox';
import { MKTypography } from '../../../../../components/MKTypography';

function BuiltByDevelopers(): JSX.Element {
  const bgImage =
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { dark, grey },
        }: Theme) =>
          `${linearGradient(
            rgba(grey?.A700, 0.8),
            rgba(dark.dark, 0.8),
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by developers
          </MKTypography>

          <MKTypography variant="h1" color="white" mb={1}>
            Complex Documentation
          </MKTypography>

          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From colors, cards, typography to complex elements, you will find
            the full documentation. Play with the utility classes and you will
            create unlimited combinations for our components.
          </MKTypography>
          <MKTypography
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& .material-icons-round': {
                fontSize: '1.125rem',
                transform: `translateX(3px)`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
              },
              '&:hover .material-icons-round, &:focus .material-icons-round': {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read docs <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
