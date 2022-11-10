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

const imagesPrefix =
  'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections';

export default [
  {
    title: 'Design Blocks',
    description:
      'A selection of 45 page sections that fit perfectly in any combination',
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: 'Page Headers',
        count: 10,
        route: '/sections/page-sections/page-headers',
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: 'Features',
        count: 14,
        route: '/sections/page-sections/features',
      },
    ],
  },
  {
    title: 'Navigation',
    description: '30+ components that will help go through the pages',
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: 'Navbars',
        count: 4,
        route: '/sections/navigation/navbars',
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: 'Nav Tabs',
        count: 2,
        route: '/sections/navigation/nav-tabs',
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: 'Pagination',
        count: 3,
        route: '/sections/navigation/pagination',
      },
    ],
  },
  {
    title: 'Input Areas',
    description:
      '50+ elements that you need for text manipulation and insertion',
    items: [
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: 'Forms',
        count: 3,
        route: '/sections/input-areas/forms',
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: 'Inputs',
        count: 6,
        route: '/sections/input-areas/inputs',
      },
    ],
  },
  {
    title: 'Attention Catchers',
    description:
      '20+ Fully coded components that popup from different places of the screen',
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: 'Alerts',
        count: 4,
        route: '/sections/attention-catchers/alerts',
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: 'Tooltips & Popovers',
        count: 2,
        route: '/sections/attention-catchers/tooltips-popovers',
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: 'Modals',
        count: 5,
        route: '/sections/attention-catchers/modals',
      },
    ],
  },
  {
    title: 'Elements',
    description:
      '80+ carefully crafted small elements that come with multiple colors and shapes',
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: 'Buttons',
        count: 6,
        route: '/sections/elements/buttons',
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: 'Avatars',
        count: 2,
        route: '/sections/elements/avatars',
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: 'Dropdowns',
        count: 2,
        route: '/sections/elements/dropdowns',
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: 'Toggles',
        count: 2,
        route: '/sections/elements/toggles',
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: 'Breadcrumbs',
        count: 1,
        route: '/sections/elements/breadcrumbs',
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: 'Badges',
        count: 3,
        route: '/sections/elements/badges',
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        name: 'Progress Bars',
        count: 4,
        route: '/sections/elements/progress-bars',
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: 'Typography',
        count: 2,
        route: '/sections/elements/typography',
      },
    ],
  },
];
