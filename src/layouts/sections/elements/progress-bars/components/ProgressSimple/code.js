const progressSimpleCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKProgress from "components/MKProgress";

function ProgressSimple() {
  return (
    <MKBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <MKProgress color="primary" value={50} />
            <MKProgress color="secondary" value={50} />
            <MKProgress color="success" value={50} />
            <MKProgress color="info" value={50} />
            <MKProgress color="warning" value={50} />
            <MKProgress color="error" value={50} />
            <MKProgress color="dark" value={50} />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProgressSimple;`;

export default progressSimpleCode;
