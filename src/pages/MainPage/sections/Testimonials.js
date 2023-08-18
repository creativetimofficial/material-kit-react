// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Couch to 5k components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Couch to 5k examples
import DefaultReviewCard from "features/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Valued by over </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            336,200+ apple store users
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Couch to 5K has a 4.8 star rating on the App Store, after thousands of downloads
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="K_irstin"
              date="1 day ago"
              review="This mama can! Great for mind and body... After having 2 kids and juggling everything life has to throw at me - I was firmly at the back of the line for time. Feeling bad about my lifestyle I needed a change. Enter c25k... I can't express how much this app will change your life."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Betak178"
              date="1 week ago"
              review="Seriously! I am about to start week 9 and this app has been AMAZING."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Gingerella247"
              date="3 weeks ago"
              review="I was the epitome of couch' now I'm a runner. I'll never be a natural runner, but I LOVE what couch to 5k has done for me. "
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
