// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKButton variant="outlined" color="primary">
              primary
            </MKButton>
            <MKButton variant="outlined" color="secondary">
              secondary
            </MKButton>
            <MKButton variant="outlined" color="info">
              info
            </MKButton>
            <MKButton variant="outlined" color="success">
              success
            </MKButton>
            <MKButton variant="outlined" color="warning">
              warning
            </MKButton>
            <MKButton variant="outlined" color="error">
              error
            </MKButton>
            <MKButton variant="outlined" color="light">
              light
            </MKButton>
            <MKButton variant="outlined" color="dark">
              dark
            </MKButton>
            <MKButton variant="outlined" color="white">
              White
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsOutlined;
