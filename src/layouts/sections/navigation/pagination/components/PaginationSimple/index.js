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
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// Material Kit 2 React components
import { MKPagination } from '../../../../../components/MKPagination';

function PaginationSimple(): JSX.Element {
  return (
    <Container sx={{ height: '100%' }}>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        lg={6}
        mx="auto"
        height="100%"
      >
        <MKPagination>
          <MKPagination item>
            <KeyboardArrowLeft />
          </MKPagination>
          <MKPagination item active>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>4</MKPagination>
          <MKPagination item>5</MKPagination>
          <MKPagination item>
            <KeyboardArrowRight />
          </MKPagination>
        </MKPagination>
      </Grid>
    </Container>
  );
}

export default PaginationSimple;
