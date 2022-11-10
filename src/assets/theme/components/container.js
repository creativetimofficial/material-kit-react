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

// Material Kit 2 React base styles
import breakpoints from '../base/breakpoints';

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const SM = `@media (min-width: ${sm}rem)`;
const MD = `@media (min-width: ${md}rem)`;
const LG = `@media (min-width: ${lg}rem)`;
const XL = `@media (min-width: ${xl}rem)`;
const XXL = `@media (min-width: ${xxl}rem)`;

const sharedClasses = {
  paddingRight: `2rem !important`,
  paddingLeft: `2rem !important`,
  marginRight: 'auto !important',
  marginLeft: 'auto !important',
  width: '100% !important',
  position: 'relative',
};

export default {
  [SM]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: `${sm}rem !important`,
    },
  },
  [MD]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: `${md}rem !important`,
    },
  },
  [LG]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: `${lg}rem !important`,
    },
  },
  [XL]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: `${xl}rem !important`,
    },
  },
  [XXL]: {
    '.MuiContainer-root': {
      ...sharedClasses,
      maxWidth: `${xxl}rem !important`,
    },
  },
};
