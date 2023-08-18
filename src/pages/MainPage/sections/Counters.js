// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Couch to 5k components
import MKBox from "components/MKBox";

// Couch to 5k examples
import DefaultCounterCard from "features/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={700000}
              suffix="+"
              title="Downloads"
              description="Thousands of people have used the Couch to 5k app to get fitter"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={3}
              title="Runs per week"
              description="Couch to 5k is easy to work into your schedule"
            />
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, marginLeft: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={63}
              title="Days"
              description="A short time needed to complete the course"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
