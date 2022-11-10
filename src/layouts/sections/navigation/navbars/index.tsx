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

import Dashboard from '@mui/icons-material/Dashboard';
import List from '@mui/icons-material/List';
import Schedule from '@mui/icons-material/Schedule';
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../../assets/theme';

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';

// Sections components
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Stats page components
import NavbarDark from './components/NavbarDark';
import NavPills from '../../../components/NavPills/NavPills';

// Stats page components code
import navbarDarkCode from './components/NavbarDark/code';

function Navbars(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Navbars"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/navigation/navbars' },
          { label: 'Navbars' },
        ]}
      >
        <View title="Navbar dark" code={navbarDarkCode}>
          <MKBox py={6}>
            <NavbarDark />
          </MKBox>
        </View>
        <View title="Navigation Pills from Material UI Kit V1" code={''}>
          <MKBox py={6}>
            <NavPills
              color="primary"
              tabs={[
                {
                  tabButton: 'Dashboard',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Schedule',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Dramatically visualize
                        customer directed convergence without revolutionary ROI.
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Tasks',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </MKBox>
        </View>
        <View title="Navigation Pills from Material UI Kit V1" code={''}>
          <MKBox py={6}>
            <NavPills
              color="rose"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 },
              }}
              tabs={[
                {
                  tabButton: 'Dashboard',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Schedule',
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Dramatically visualize
                        customer directed convergence without revolutionary ROI.
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Navbars;
