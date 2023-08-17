// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Couch to 5k",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
    },
    {
      icon: <TwitterIcon />,
    },
    {
      icon: <GitHubIcon />,
    },
    {
      icon: <YouTubeIcon />,
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us" },
        { name: "freebies" },
        { name: "premium tools" },
        { name: "blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations" },
        { name: "bits & snippets" },
        { name: "affiliate program" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us" },
        { name: "knowledge center" },
        { name: "custom development" },
        { name: "sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions" },
        { name: "privacy policy" },
        { name: "licenses (EULA)" },
      ],
    },
  ],
};
