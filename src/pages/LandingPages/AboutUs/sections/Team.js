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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import compartida_1 from "assets/images/compartida_1.jpg";
import compartida_2 from "assets/images/compartida_2.jpg";
import compartida_4 from "assets/images/compartida_4.jpg";

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
              Las familias compartidas
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Las familias que comparten se llevan mejor. Hasta 3 líneas. ¡Cuidado! Las tarifas
              compartidas son más económicas, pero los Gigas sin usar no se acumulan.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={compartida_2}
                name="La básica"
                position={{ color: "info" }}
                description="Llamadas ilimitadas con 50GB a compartir, por tan solo 23€ al mes."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={compartida_1}
                name="La mediana"
                position={{ color: "info" }}
                description="Llamadas ilimitadas con 90GB a compartir, por tan solo 28€ al mes."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={compartida_4}
                name="La cañera"
                position={{ color: "info" }}
                description="Llamadas ilimitadas con 200GB a compartir, pon tan solo 38€ al mes."
              />
            </MKBox>
          </Grid>
          {/* <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={compartida_3}
                name="Marquez Garcia"
                position={{ color: "info", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
