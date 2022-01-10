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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function Tooltips() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Tooltip on top" placement="top">
              <MKButton variant="gradient" color="info">
                tooltip on top
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <MKButton variant="gradient" color="info">
                tooltip on right
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <MKButton variant="gradient" color="info">
                tooltip on bottom
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <MKButton variant="gradient" color="info">
                tooltip on left
              </MKButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tooltips;
