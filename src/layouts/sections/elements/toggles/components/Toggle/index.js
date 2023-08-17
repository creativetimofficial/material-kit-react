import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Toggle() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <MKBox display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />
            <MKTypography
              variant="button"
              color="text"
              fontWeight="regular"
              ml={1}
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={toggleSwitch}
            >
              Remember me
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Toggle;
