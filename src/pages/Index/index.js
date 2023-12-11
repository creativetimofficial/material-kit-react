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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import Navbar from "components/Custom/Navbar"
import Footer from "components/Custom/Footer"

// Routes
import unregister_routes from "unregister_routes";
import footerRoutes from "footer.routes";


function Index() {
  return (
    <>
      <Navbar
        routes={unregister_routes}
        sticky
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
            <p>Conoce personas</p>
            <button>Registrate</button><br/>
            <button>Inicia sesion</button>

            <p>Instala la app</p>
            <button>google play</button>
        </Container>
        </MKBox>
      
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Index;
