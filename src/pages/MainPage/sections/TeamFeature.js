// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "features/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/coaches/1.jpg";
import team2 from "assets/images/coaches/2.avif";
import team3 from "assets/images/coaches/3.jpg";
import team4 from "assets/images/coaches/4.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Coaches
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              The app developed by Public Health England and BBC Get Inspired has 5 great trainers
              to support and motivate you.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Jo Whiley"
                position={{ color: "info", label: "BBC presenter" }}
                description="Jo Whiley, is an English radio DJ and television presenter."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Michael Johnson"
                position={{ color: "info", label: "Olympic gold medal athlete" }}
                description="Michael has won four Olympic gold medals and eight World Championships gold medals in the span of his career."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Sanjeev Kohli"
                position={{ color: "info", label: "Comedian" }}
                description="Sanjeev Singh Kohli is a British actor, comedian, and writer."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Sarah Millican"
                position={{ color: "info", label: "Comedian" }}
                description="Millican won the comedy award for Best Newcomer at the 2008 Edinburgh Festival Fringe. She is a comedian and writer."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
