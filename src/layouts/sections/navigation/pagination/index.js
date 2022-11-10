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

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';

// Sections components
import BaseLayout from '../../components/BaseLayout';
import View from '../../components/View';

// Stats page components
import PaginationSimple from './components/PaginationSimple';
import Paginations from '../../../components/Pagination/Pagination';

// Stats page components code
import paginationSimpleCode from './components/PaginationSimple/code';

function Pagination(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Pagination"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/navigation/pagination' },
          { label: 'Pagination' },
        ]}
      >
        <View title="Pagination simple" code={paginationSimpleCode}>
          <MKBox py={3}>
            <PaginationSimple />
          </MKBox>
        </View>
        <View title="Pagination from Material UI Kit V1" code={''}>
          <MKBox py={3}>
            <Paginations
              pages={[
                { text: 1 },
                { text: '...' },
                { text: 5 },
                { text: 6 },
                { active: true, text: 7 },
                { text: 8 },
                { text: 9 },
                { text: '...' },
                { text: 12 },
              ]}
            />
          </MKBox>
          <MKBox py={3}>
            <Paginations
              pages={[
                { text: 'PREV' },
                { text: 1 },
                { text: 2 },
                { active: true, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: 'NEXT' },
              ]}
              color="info"
            />
          </MKBox>
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Pagination;
