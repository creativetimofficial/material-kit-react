// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsIconRight() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              small
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </MKButton>
            <MKButton color="info">
              default
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </MKButton>
            <MKButton color="info" size="large">
              large
              <Icon sx={{ ml: 1 }}>favorite</Icon>
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsIconRight;
