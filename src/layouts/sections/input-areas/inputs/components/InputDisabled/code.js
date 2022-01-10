const inputDisabledCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDisabled() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Disabled" fullWidth disabled />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDisabled;`;

export default inputDisabledCode;
