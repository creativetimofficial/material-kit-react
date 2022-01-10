const badgesGradientCode = `
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

function BadgesGradient() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <MKBadge badgeContent="primary" color="primary" container />
            <MKBadge badgeContent="secondary" color="secondary" container />
            <MKBadge badgeContent="success" color="success" container />
            <MKBadge badgeContent="error" color="error" container />
            <MKBadge badgeContent="warning" color="warning" container />
            <MKBadge badgeContent="info" color="info" container />
            <MKBadge badgeContent="light" color="light" container />
            <MKBadge badgeContent="dark" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesGradient;`;

export default badgesGradientCode;
