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

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import ArticleIcon from '@mui/icons-material/Article';

// Pages
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Author from './pages/author';
import SignIn from './pages/sign-in';

// Sections
import PageHeaders from './sections/page-sections/page-headers';
import Features from './sections/page-sections/features';
import Navbars from './sections/navigation/navbars';
import NavTabs from './sections/navigation/nav-tabs';
import Pagination from './sections/navigation/pagination';
import Inputs from './sections/input-areas/inputs';
import Forms from './sections/input-areas/forms';
import Alerts from './sections/attention-catchers/alerts';
import Modals from './sections/attention-catchers/modals';
import TooltipsPopovers from './sections/attention-catchers/tooltips-popovers';
import Avatars from './sections/elements/avatars';
import Badges from './sections/elements/badges';
import BreadcrumbsEl from './sections/elements/breadcrumbs';
import Buttons from './sections/elements/buttons';
import Dropdowns from './sections/elements/dropdowns';
import ProgressBars from './sections/elements/progress-bars';
import Toggles from './sections/elements/toggles';
import Typography from './sections/elements/typography';

import React from 'react';

import { HeaderRoute } from './types';

export const routes: HeaderRoute[] = [
  {
    name: 'pages',
    icon: <DashboardIcon />,
    columns: 1,
    rowsPerColumn: 2,
    menu: [
      {
        name: 'landing pages',
        subItems: [
          {
            name: 'about us',
            route: '/LandingPages/AboutUs',
            component: <AboutUs />,
          },
          {
            name: 'contact us',
            route: '/LandingPages/ContactUs',
            component: <ContactUs />,
          },
          {
            name: 'author',
            route: '/LandingPages/Author',
            component: <Author />,
          },
        ],
      },
      {
        name: 'account',
        subItems: [
          {
            name: 'sign in',
            route: '/LandingPages/SignIn',
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: 'sections',
    icon: <ViewDayIcon />,
    menu: [
      {
        name: 'page sections',
        description: 'See all sections',
        dropdown: true,
        subItems: [
          {
            name: 'page headers',
            route: '/sections/page-sections/page-headers',
            component: <PageHeaders />,
          },
          {
            name: 'features',
            route: '/sections/page-sections/features',
            component: <Features />,
          },
        ],
      },
      {
        name: 'navigation',
        description: 'See all navigations',
        dropdown: true,
        subItems: [
          {
            name: 'navbars',
            route: '/sections/navigation/navbars',
            component: <Navbars />,
          },
          {
            name: 'nav tabs',
            route: '/sections/navigation/nav-tabs',
            component: <NavTabs />,
          },
          {
            name: 'pagination',
            route: '/sections/navigation/pagination',
            component: <Pagination />,
          },
        ],
      },
      {
        name: 'input areas',
        description: 'See all input areas',
        dropdown: true,
        subItems: [
          {
            name: 'inputs',
            route: '/sections/input-areas/inputs',
            component: <Inputs />,
          },
          {
            name: 'forms',
            route: '/sections/input-areas/forms',
            component: <Forms />,
          },
        ],
      },
      {
        name: 'attention catchers',
        description: 'See all examples',
        dropdown: true,
        subItems: [
          {
            name: 'alerts',
            route: '/sections/attention-catchers/alerts',
            component: <Alerts />,
          },
          {
            name: 'modals',
            route: '/sections/attention-catchers/modals',
            component: <Modals />,
          },
          {
            name: 'tooltips & popovers',
            route: '/sections/attention-catchers/tooltips-popovers',
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: 'elements',
        description: 'See all 32 examples',
        dropdown: true,
        subItems: [
          {
            name: 'avatars',
            route: '/sections/elements/avatars',
            component: <Avatars />,
          },
          {
            name: 'badges',
            route: '/sections/elements/badges',
            component: <Badges />,
          },
          {
            name: 'breadcrumbs',
            route: '/sections/elements/breadcrumbs',
            component: <BreadcrumbsEl />,
          },
          {
            name: 'buttons',
            route: '/sections/elements/buttons',
            component: <Buttons />,
          },
          {
            name: 'dropdowns',
            route: '/sections/elements/dropdowns',
            component: <Dropdowns />,
          },
          {
            name: 'progress bars',
            route: '/sections/elements/progress-bars',
            component: <ProgressBars />,
          },
          {
            name: 'toggles',
            route: '/sections/elements/toggles',
            component: <Toggles />,
          },
          {
            name: 'typography',
            route: '/sections/elements/typography',
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: 'docs',
    icon: <ArticleIcon />,
    menu: [
      {
        name: 'getting started',
        description: 'All about overview, quick start, license and contents',
        href: 'https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/',
      },
      {
        name: 'foundation',
        description: 'See our colors, icons and typography',
        href: 'https://www.creative-tim.com/learning-lab/react/colors/material-kit/',
      },
      {
        name: 'components',
        description: 'Explore our collection of fully designed components',
        href: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
      },
      {
        name: 'plugins',
        description: 'Check how you can integrate our plugins',
        href: 'https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/',
      },
    ],
  },
  {
    name: 'github',
    icon: <GitHubIcon />,
    href: 'https://www.github.com/creativetimofficial/material-kit-react',
  },
];
