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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import React from "react";

// Material Kit 2 React examples
import axios from "axios";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {

  const [ethPrice, setethPrice] = React.useState(50);

  const baseURL="https://api.owlracle.info/v4/eth/gas?apikey=d75facf55eb54ea4825e69645f6d5e64"
  const test = async() => {
    axios.get(`${baseURL}`).then((response) => {
      setethPrice(response.data.avgTx)
    });
  };



  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Elements"
              description="Nevermind"
            />
            <button onClick={test}>r</button>
            <p>{ethPrice}</p>
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={5}
              suffix="+"
              title="Design Blocks"
              description="mportancia ecológica: A pesar de su mala reputación, las arañas son esenciales para el equilibrio ecológico. Son depredadores naturales que controlan las poblaciones de insectos, lo que ayuda a regular los ecosistemas.M"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Paes"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
