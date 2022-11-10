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
  The boxShadow() function helps you to create a box shadow for an element
 */

// Material Kit 2 React helper functions
import { rgba } from './rgba';
import { pxToRem } from './pxToRem';

import { Color } from 'chroma-js';

export function boxShadow(
  offset: number[] = [],
  radius: number[] = [],
  color: string | number | Color,
  opacity: number,
  inset = '',
): string {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread,
  )} ${rgba(color, opacity)}`;
}
