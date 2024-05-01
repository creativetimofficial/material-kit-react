// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Customer Focused Driven Results
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              We ensure everyone is working towards the same goal and your digital initiatives are
              generating business value in measurable ways. We enable employees to work without the
              challenges of disruption and keep up with dynamically changing demands. We streamline
              the employee experience to increase collaboration, raise performance output, improve
              accuracy, and ensure compliance.
              <span
                style={{
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                G&L Federal enables you to stay on top of customer demands and expectations which
                are evolving at a faster pace than technology. Our employee engagement model and
                ecosystem of intelligent automation technologies enable system improvements in both
                organizational efficiency and effectiveness while simultaneously providing a
                superior customer experience.
              </span>
            </MKTypography>
            {/* <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography> */}
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKTypography variant="p" my={1}>
                The IHS Automation Value Proposition
              </MKTypography>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <VerifiedUserIcon fontSize="small">output</VerifiedUserIcon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  100% Error Free Output
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <TrendingUpIcon fontSize="small">efficiency</TrendingUpIcon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  40% Increase in Efficiency
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <SpeedIcon fontSize="small">token</SpeedIcon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  85% Faster Completion
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <AttachMoneyIcon fontSize="small">cost</AttachMoneyIcon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  65% Reduction in Costs
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
