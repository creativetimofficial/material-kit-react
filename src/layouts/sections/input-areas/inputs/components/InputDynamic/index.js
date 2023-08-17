/* eslint-disable no-param-reassign */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Couch to 5k components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDynamic() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;
