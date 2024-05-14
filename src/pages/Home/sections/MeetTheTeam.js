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

import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import BradyImg from "../../../assets/images/Brady.jpeg";
import ChrisImg from "../../../assets/images/Chris.jpeg";
import RichardImg from "../../../assets/images/Richard.jpg";
import AliciaImg from "../../../assets/images/aliciaauman.jpeg";

const MemberCard = styled(Paper)(({ theme, layout }) => ({
  display: "flex",
  flexDirection: layout === "reverse" ? "row-reverse" : "row",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  padding: theme.spacing(3),
  margin: "auto",
  maxWidth: 800,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // Stack the elements on smaller screens
    textAlign: "center",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

const Image = styled("img")({
  width: "300px", // Makes the image fill the container width
  height: "100%", // Fixed height for all images
  objectFit: "cover", // Ensures the image covers the space, cropping if necessary
  borderRadius: "4px", // Optional: Rounds the corners of the images
  objectPosition: "top",
});

function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Richard Gordon",
      position: "President",
      bio: "Richard Gordon utilizes a comprehensive array of resources to enhance customer agility, speed, and evidence-based decision-making, allowing for preemptive problem solving. His varied experience which ranges from Capital Hill to Executive Leadership consulting equips him uniquely to contribute significantly to your success.",
      imageUrl: RichardImg,
    },
    {
      name: "Chris Leiter",
      position: "SVP of Operations",
      bio: "Chris Leiter leverages a distinguished career in technology and federal government contracting to deliver sophisticated solutions in cybersecurity, network management, and systems automation. His expertise, honed through strategic roles with the US State Department, the Department of Defense, DISA, and the FBI, informs his approach to technology development and implementation. A disabled US Army veteran, Chris Leiter is recognized for his deep industry knowledge and commitment to innovation in communication and analysis.",
      imageUrl: ChrisImg,
    },
    {
      name: "Brady Cusack",
      position: "SVP Technology",
      bio: "Brady Cusack is an experienced technology leader with expertise in enterprise architecture, robotics process automation, and cybersecurity operations. Brady graduated from Towson University with a B.S. in Computer Science focused on Cybersecurity. He then worked as an automation consultant for numerous small businesses where he helped lead implementations at Fortune 500 companies. Brady later founded a small managed service provider, growing it to support two federal agencies and five government contractors.",
      imageUrl: BradyImg,
    },
    {
      name: "Alicia Auman",
      position: "Federal Sales Lead",
      bio: "Alicia Auman joins G&L Federal bringing experience selling software to state and local government entites. Alicia has over a decade of experience in the education space, spending years working as a resource inside and out of the classroom.",
      imageUrl: AliciaImg,
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 8, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography variant="h3" component="h2" justifyContent="center" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1" paragraph justifyContent="center">
          Our leadership team brings together years of expertise and dedication to drive our vision
          forward.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={member.name}>
              <MemberCard display="flex" layout={index === 1 ? "reverse" : "normal"}>
                <Image src={member.imageUrl} alt={member.name} />
                <Box sx={{ padding: 2 }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" marginBottom={1}>
                    {member.position}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" maxWidth={400}>
                    {member.bio}
                  </Typography>
                </Box>
              </MemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MeetTheTeam;
