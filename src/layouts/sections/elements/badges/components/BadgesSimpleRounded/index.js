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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

function BadgesSimpleRounded() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <MKBadge
              badgeContent="primary"
              variant="contained"
              color="primary"
              container
              circular
            />
            <MKBadge
              badgeContent="secondary"
              variant="contained"
              color="secondary"
              container
              circular
            />
            <MKBadge
              badgeContent="success"
              variant="contained"
              color="success"
              container
              circular
            />
            <MKBadge badgeContent="error" variant="contained" color="error" container circular />
            <MKBadge
              badgeContent="warning"
              variant="contained"
              color="warning"
              container
              circular
            />
            <MKBadge badgeContent="info" variant="contained" color="info" container circular />
            <MKBadge badgeContent="light" variant="contained" color="light" container circular />
            <MKBadge badgeContent="dark" variant="contained" color="dark" container circular />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesSimpleRounded;
