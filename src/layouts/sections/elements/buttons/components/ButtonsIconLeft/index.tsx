/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import FavoriteIcon from "@mui/icons-material/Favorite";

// Material Kit 2 React components
import { MKBox } from "../../../../../components/MKBox";
import { MKButton } from "../../../../../components/MKButton";

import React from "react";

function ButtonsIconLeft(): JSX.Element {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              <FavoriteIcon sx={{ mr: 1 }} />
              Small
            </MKButton>

            <MKButton color="info">
              <FavoriteIcon sx={{ mr: 1 }} />
              default
            </MKButton>

            <MKButton color="info" size="large">
              <FavoriteIcon sx={{ mr: 1 }} />
              Large
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsIconLeft;
