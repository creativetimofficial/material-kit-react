// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsContained() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton color="primary">primary</MKButton>
            <MKButton color="secondary">secondary</MKButton>
            <MKButton color="info">info</MKButton>
            <MKButton color="success">success</MKButton>
            <MKButton color="warning">warning</MKButton>
            <MKButton color="error">error</MKButton>
            <MKButton color="light">light</MKButton>
            <MKButton color="dark">dark</MKButton>
            <MKButton color="white">White</MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsContained;
