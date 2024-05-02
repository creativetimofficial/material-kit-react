import React from "react";
import { Container, Grid, Box, Typography, TextField, Button, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import GitHubIcon from "@mui/icons-material/GitHub";

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
            <Link href="https://facebook.com" target="_blank">
              <FacebookIcon sx={{ mr: 1 }} /> facebook
            </Link>
            <br />
            {/* <Link href="https://linkedin.com" target="_blank"><LinkedInIcon sx={{ mr: 1 }} /> LinkedIn</Link><br />
            <Link href="https://youtube.com" target="_blank"><YouTubeIcon sx={{ mr: 1 }} /> YouTube</Link><br />
            <Link href="https://github.com" target="_blank"><GitHubIcon sx={{ mr: 1 }} /> GitHub</Link> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Send us a message
            </Typography>
            <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
