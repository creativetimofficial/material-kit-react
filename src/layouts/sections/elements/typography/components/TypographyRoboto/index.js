/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Typography() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <MKTypography variant="h2" mb={6}>
          Typography - Font Family Roboto
        </MKTypography>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 1
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h1">H1 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 2
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h2">H2 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 3
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h3">H3 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 4
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h4">H4 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 5
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h5">H5 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Heading 6
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h6">H6 Material Kit</MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Lead Text
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="body1" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Paragraph
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="body2" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Small
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <MKTypography variant="button" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography variant="button" color="text" fontWeight="bold" textTransform="uppercase">
              Tiny
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <MKTypography variant="caption" color="text">
              I will be the leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus. I think that&apos;s
              a responsibility that I have, to push possibilities, to show people, this is the level
              that things could be at.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Typography;
