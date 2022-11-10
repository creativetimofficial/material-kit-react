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
  'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation';
const imagesPagesPrefix = `${imagesPrefix}/pages`;

export default [
  {
    image: `${imagesPagesPrefix}/about-us.jpg`,
    name: 'About Us Page',
    route: '/LandingPages/AboutUs',
  },
  {
    image: `${imagesPagesPrefix}/contact.jpg`,
    name: 'Contact Us Page',
    route: '/LandingPages/ContactUs',
  },
  {
    image: `${imagesPrefix}/account/signin-basic.jpg`,
    name: 'Sign In Page',
    route: '/LandingPages/SignIn',
  },
  {
    image: `${imagesPagesPrefix}/author.jpg`,
    name: 'Author Page',
    route: '/LandingPages/Author',
  },
];
