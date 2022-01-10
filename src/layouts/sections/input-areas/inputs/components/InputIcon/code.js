const inputIconCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputIcon() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput
            variant="standard"
            placeholder="Search"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputIcon;`;

export default inputIconCode;
