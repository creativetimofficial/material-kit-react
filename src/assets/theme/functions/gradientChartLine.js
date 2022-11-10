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
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */

// Material Kit 2 React helper functions
import { rgba } from './rgba';

export function gradientChartLine(
  chart: any,
  color: string,
  opacity = 0.2,
): CanvasGradient {
  const ctx = chart.getContext('2d');
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
  gradientStroke.addColorStop(0, 'rgba(203, 12, 159, 0)');

  return gradientStroke;
}
