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

// react-flatpickr components
import DatePicker from 'react-flatpickr';

// react-flatpickr styles
import 'flatpickr/dist/flatpickr.css';

// Material Kit 2 React components
import { MKInput, MKInputProps } from '../MKInput';

export const MKDatePicker = ({
  input,
  ...rest
}: MKDatePickerProps): JSX.Element => (
  <DatePicker
    render={(props, ref) => (
      <MKInput {...input} defaultValue={props} inputRef={ref} />
    )}
    {...rest}
  />
);

// Setting default values for the props of MKDatePicker
MKDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the MKDatePicker
interface MKDatePickerProps {
  input: MKInputProps;
}
