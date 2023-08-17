// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Couch to 5k components
import MKBox from "components/MKBox";

// Couch to 5k examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Download
                    <br />
                    the App
                  </>
                }
                description="Get started on your running journey."
              />
              <RotatingCardBack
                image={bgBack}
                title="Available on the App store"
                description="Free to download on the Android and Apple stores"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "download",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ "margin-left": "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="run_circle"
                  title="Absolute Beginners"
                  description="Couch to 5K is a running plan for absolute beginners."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="calendar_month"
                  title="A comprehensive plan"
                  description="The plan involves 3 runs a week, with a day of rest in between, and a different schedule for each of the 9 weeks."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ "margin-top": { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="schedule"
                  title="Realistic expectations "
                  description="Week 1 involves running for just a minute at a time, creating realistic expectations and making the challenge feel achievable right from the start."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="favorite"
                  title="Improve your physical health"
                  description="Running regularly will improve the health of your heart and lungs."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
