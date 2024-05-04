import React from "react";
import { Container, Grid, Box, Typography, Link, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { Facebook, GitHub, YouTube } from "@mui/icons-material";
// prettier-ignore
function Footer() {
  return (
    <Box component="footer" sx={{ width: "100%", py: 4, px: 2, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} /> info@glfederal.com
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} /> +1-443-842-1045
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ mr: 1 }} />
              9701 Apollo Drive, Suite 100, Largo, Maryland 20774
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link href="https://www.facebook.com/people/GL-Federal/61558714801982/" target="_blank">
                <Facebook sx={{ mr: 1 }} /> Facebook
              </Link>
              <Link href="https://github.com/G-L-Federal" target="_blank">
                <GitHub sx={{ mr: 1 }} /> GitHub
              </Link>
              <Link href="https://www.youtube.com/@ihsautomation9536" target="_blank">
                <YouTube sx={{ mr: 1 }} /> YouTube
              </Link>
              {/* More social links can be added here */}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="#home" sx={linkStyle}>
              Home
            </Link>
            <Link href="#about" sx={linkStyle}>
              About
            </Link>
            <Link href="#services" sx={linkStyle}>
              Services
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const linkStyle = {
  position: "relative",
  display: "block",
  marginBottom: "8px",
  textDecoration: "none",
  color: "inherit",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    backgroundColor: "#1A73E8", // Use your theme color here
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
};

export default Footer;
