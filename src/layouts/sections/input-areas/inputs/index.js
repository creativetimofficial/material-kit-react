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

// Inputs page components
import InputDynamic from './components/InputDynamic';
import InputStatic from './components/InputStatic';
import InputOutlined from './components/InputOutlined';
import InputIcon from './components/InputIcon';
import InputSuccess from './components/InputSuccess';
import InputError from './components/InputError';
import InputDisabled from './components/InputDisabled';

// Inputs page components code
import inputDynamicCode from './components/InputDynamic/code';
import inputStaticCode from './components/InputStatic/code';
import inputOutlinedCode from './components/InputOutlined/code';
import inputIconCode from './components/InputIcon/code';
import inputSuccessCode from './components/InputSuccess/code';
import inputErrorCode from './components/InputError/code';
import inputDisabledCode from './components/InputDisabled/code';

function Inputs(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Inputs"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/input-areas/inputs' },
          { label: 'Inputs' },
        ]}
      >
        <View title="Input dynamic" code={inputDynamicCode}>
          <InputDynamic />
        </View>

        <View title="Input static" code={inputStaticCode}>
          <InputStatic />
        </View>

        <View title="Input outlined" code={inputOutlinedCode}>
          <InputOutlined />
        </View>

        <View title="Input icon" code={inputIconCode}>
          <InputIcon />
        </View>

        <View title="Input success" code={inputSuccessCode}>
          <InputSuccess />
        </View>

        <View title="Input error" code={inputErrorCode}>
          <InputError />
        </View>

        <View title="Input disabled" code={inputDisabledCode}>
          <InputDisabled />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Inputs;
