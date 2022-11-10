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

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { FooterRoutes } from './types';

// Images
import logoCT from './assets/images/logo-ct-dark.png';

export const footerRoutes: FooterRoutes = {
  brand: {
    name: 'Material Kit 2',
    image: logoCT,
    route: '/',
  },
  copyright: { name: 'Material Kit', url: 'https://www.creative-tim.com' },
  socials: [
    {
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/CreativeTim/',
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/creativetim',
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/creativetimofficial',
    },
    {
      icon: <YouTubeIcon />,
      url: 'https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w',
    },
  ],
  menus: [
    {
      name: 'company',
      items: [
        {
          name: 'about us',
          route: 'https://www.creative-tim.com/presentation',
        },
        {
          name: 'freebies',
          route: 'https://www.creative-tim.com/templates/free',
        },
        {
          name: 'premium tools',
          route: 'https://www.creative-tim.com/templates/premium',
        },
        { name: 'blog', route: 'https://www.creative-tim.com/blog' },
      ],
    },
    {
      name: 'resources',
      items: [
        { name: 'illustrations', route: 'https://iradesign.io/' },
        { name: 'bits & snippets', route: 'https://www.creative-tim.com/bits' },
        {
          name: 'affiliate program',
          route: 'https://www.creative-tim.com/affiliates/new',
        },
      ],
    },
    {
      name: 'help & support',
      items: [
        {
          name: 'contact us',
          route: 'https://www.creative-tim.com/contact-us',
        },
        {
          name: 'knowledge center',
          route: 'https://www.creative-tim.com/knowledge-center',
        },
        {
          name: 'custom development',
          route: 'https://services.creative-tim.com/',
        },
        {
          name: 'sponsorships',
          route: 'https://www.creative-tim.com/sponsorships',
        },
      ],
    },
    {
      name: 'legal',
      items: [
        {
          name: 'terms & conditions',
          route: 'https://www.creative-tim.com/terms',
        },
        {
          name: 'privacy policy',
          route: 'https://www.creative-tim.com/privacy',
        },
        {
          name: 'licenses (EULA)',
          route: 'https://www.creative-tim.com/license',
        },
      ],
    },
  ],
};
