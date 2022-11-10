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

// Buttons page components
import ButtonsGradient from './components/ButtonsGradient';
import ButtonsContained from './components/ButtonsContained';
import ButtonsOutlined from './components/ButtonsOutlined';
import ButtonsSizes from './components/ButtonsSizes';
import ButtonsIconLeft from './components/ButtonsIconLeft';
import ButtonsIconRight from './components/ButtonsIconRight';

// Buttons page components code
import buttonsGradientCode from './components/ButtonsGradient/code';
import buttonsContainedCode from './components/ButtonsContained/code';
import buttonsOutlinedCode from './components/ButtonsOutlined/code';
import buttonsSizesCode from './components/ButtonsSizes/code';
import buttonsIconLeftCode from './components/ButtonsIconLeft/code';
import buttonsIconRightCode from './components/ButtonsIconRight/code';

function Buttons(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Buttons"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/elements/buttons' },
          { label: 'Buttons' },
        ]}
      >
        <View title="Buttons gradient" code={buttonsGradientCode}>
          <ButtonsGradient />
        </View>

        <View title="Buttons contained" code={buttonsContainedCode}>
          <ButtonsContained />
        </View>

        <View title="Buttons outlined" code={buttonsOutlinedCode}>
          <ButtonsOutlined />
        </View>

        <View title="Buttons sizes" code={buttonsSizesCode}>
          <ButtonsSizes />
        </View>

        <View title="Buttons icon left" code={buttonsIconLeftCode}>
          <ButtonsIconLeft />
        </View>

        <View title="Buttons icon right" code={buttonsIconRightCode}>
          <ButtonsIconRight />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Buttons;
