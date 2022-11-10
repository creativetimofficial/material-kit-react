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

// Forms page components
import FormSimple from './components/FormSimple';

// Forms page components code
import formSimpleCode from './components/FormSimple/code';

function Forms(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Forms"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/input-areas/forms' },
          { label: 'Forms' },
        ]}
      >
        <View title="Form Simple" code={formSimpleCode}>
          <FormSimple />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Forms;
