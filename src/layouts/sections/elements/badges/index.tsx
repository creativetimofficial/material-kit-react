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

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../../assets/theme';

// Sections components
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Badges page components
import BadgesGradient from './components/BadgesGradient';
import BadgesSimple from './components/BadgesSimple';
import BadgesSimpleRounded from './components/BadgesSimpleRounded';

// Badges page components code
import badgesGradientCode from './components/BadgesGradient/code';
import badgesSimpleCode from './components/BadgesSimple/code';
import badgesSimpleRoundedCode from './components/BadgesSimpleRounded/code';

function Badges(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Badges"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/elements/badges' },
          { label: 'Badges' },
        ]}
      >
        <View title="Badges gradient" code={badgesGradientCode}>
          <BadgesGradient />
        </View>

        <View title="Badges simple" code={badgesSimpleCode}>
          <BadgesSimple />
        </View>

        <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
          <BadgesSimpleRounded />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Badges;
