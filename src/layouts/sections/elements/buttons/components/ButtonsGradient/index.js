// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsGradient() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton variant="gradient" color="primary">
              primary
            </MKButton>
            <MKButton variant="gradient" color="secondary">
              secondary
            </MKButton>
            <MKButton variant="gradient" color="info">
              info
            </MKButton>
            <MKButton variant="gradient" color="success">
              success
            </MKButton>
            <MKButton variant="gradient" color="warning">
              warning
            </MKButton>
            <MKButton variant="gradient" color="error">
              error
            </MKButton>
            <MKButton variant="gradient" color="light">
              light
            </MKButton>
            <MKButton variant="gradient" color="dark">
              dark
            </MKButton>
            <MKButton variant="gradient" color="white">
              White
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsGradient;
