import React from "react";

// @mui material components
// import Icon from "@mui/material/Icon";
// import Stack from "@mui/material/Stack";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import SpeedIcon from "@mui/icons-material/Speed";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

import { Container, Grid, Typography, Box } from "@mui/material";

function WhatWeOffer() {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "20px",
        marginBottom: "40px",
        // backgroundColor: "#49a3f1",
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        What We Offer
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box style={{ borderRight: "2px solid #ccc", paddingRight: "15px" }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Management Consulting
            </Typography>
            <Typography variant="body2">
              We ensure everyone is working towards the same goal and your digital initiatives are
              generating business value in measurable ways.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box style={{ borderRight: "2px solid #ccc", paddingRight: "15px" }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Process Automation
            </Typography>
            <Typography variant="body2">
              We enable employees to work without the challenges of disruption and keep up with
              dynamically changing demands.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Business Transformation
            </Typography>
            <Typography variant="body2">
              We streamline the employee experience to increase collaboration, raise performance
              output, improve accuracy, and ensure compliance.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhatWeOffer;
