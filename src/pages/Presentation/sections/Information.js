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
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={1} my={1}>
      <Container>
        <Grid container item xs={10} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={20} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Doações
                    {/* <br />
                    Material Kit */}
                  </>
                }
                description="Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês. 1 Pedro 5:7"
              />
              <RotatingCardBack
                image={bgBack}
                title="Ajude-nos"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Clique para doar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={5}>
              <DesignBlocks />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
