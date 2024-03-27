// @mui icons

//import FacebookIcon from "@mui/icons-material/Facebook";
//import GitHubIcon from "@mui/icons-material/GitHub";
//import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../src/components/DiscordIcon/index.js";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/miniLogo.png";
//import icon from "assets/theme/components/icon";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Pursuit.Bet",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/Pursuit_Bet",
    },
    {
      icon: <DiscordIcon />,
      link: "https://discord.gg/9szpApnk",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "https://www.creative-tim.com/presentation" }],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "looksmaxing",
      items: [
        { name: "Bonesmashing", href: "https://www.creative-tim.com/terms" },
        { name: "Mogging", href: "https://www.creative-tim.com/privacy" },
        { name: "Gooning", href: "https://www.creative-tim.com/license" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Shake State Studios
      </MKTypography>
      .
    </MKTypography>
  ),
};
