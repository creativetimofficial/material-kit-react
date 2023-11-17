/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
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
                    Embark on a journey
                    <br />
                    of self-improvement with GetFitter
                  </>
                }
                description="🚀 #HealthyLiving #FitnessJourney #GetFitter"
              />
              <RotatingCardBack
                image={bgBack}
                title="Get started"
                description="Download now and experience the future of health, diet, and fitness at your fingertips. Your body, your rules – let us be your guide!"
                action={{
                  type: "internal",
                  route: "/app-store-url",
                  label: "Download now",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="📊 Macro & Calorie Tracking"
                  description="Take control of your nutrition like never before. Our intuitive charts provide a visual representation of your macros and calorie consumption, allowing you to make informed choices and optimize your diet for peak performance."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="🌟 AI Personal Assistant"
                  description=" Your dedicated AI companion is here to customize your health and fitness experience. Receive personalized recommendations, set achievable goals, and stay motivated with real-time insights tailored just for you."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="🥑 Keto Calculator"
                  description="Unleash the power of keto with our built-in calculator. Effortlessly track your macronutrient intake and maintain the perfect balance for your ketogenic lifestyle. Achieve your fitness goals with precision and efficiency."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="📈 Progress Tracking"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
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
