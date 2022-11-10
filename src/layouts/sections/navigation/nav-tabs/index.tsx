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

import Build from '@mui/icons-material/Build';
import Chat from '@mui/icons-material/Chat';
import Face from '@mui/icons-material/Face';
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
import TabsSimple from './components/TabsSimple';
import CustomTabs from '../../../components/CustomTabs/CustomTabs';

// Stats page components code
import tabsSimpleCode from './components/TabsSimple/code';

function NavTabs(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Nav Tabs"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/navigation/nav-tabs' },
          { label: 'Nav Tabs' },
        ]}
      >
        <View title="Tabs simple" code={tabsSimpleCode}>
          <MKBox bgColor="white" py={6}>
            <TabsSimple />
          </MKBox>
        </View>
        <View title="Tabs with Icons on Card from Material UI Kit V1" code={''}>
          <MKBox bgColor="white" py={6}>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Profile',
                  tabIcon: Face,
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
                {
                  tabName: 'Messages',
                  tabIcon: Chat,
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  ),
                },
                {
                  tabName: 'Settings',
                  tabIcon: Build,
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
              ]}
            />
          </MKBox>
        </View>
        <View title="Tabs on Plain Card from Material UI Kit V1" code={''}>
          <MKBox bgColor="white" py={6}>
            <CustomTabs
              plainTabs
              headerColor="danger"
              tabs={[
                {
                  tabName: 'Home',
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
                {
                  tabName: 'Updates',
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  ),
                },
                {
                  tabName: 'History',
                  tabContent: (
                    <p style={{ textAlign: 'center' }}>
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
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

export default NavTabs;
