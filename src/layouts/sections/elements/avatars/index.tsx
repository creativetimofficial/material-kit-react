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
import BaseLayout from '../../../sections/components/BaseLayout';
import View from '../../../sections/components/View';

// Avatars page components
import AvatarGroup from './components/AvatarGroup';
import AvatarSize from './components/AvatarSize';

// Avatars page components code
import avatarGroupCode from './components/AvatarGroup/code';
import avatarSizeCode from './components/AvatarSize/code';

function Avatars(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseLayout
        title="Avatars"
        breadcrumb={[
          { label: 'Page Sections', route: '/sections/elements/avatars' },
          { label: 'Avatars' },
        ]}
      >
        <View title="Avatar Group" code={avatarGroupCode}>
          <AvatarGroup />
        </View>

        <View title="Avatar Size" code={avatarSizeCode}>
          <AvatarSize />
        </View>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Avatars;
