// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: process.env.REACT_APP_TITLE,
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://github.com/usrivastava92",
    },
    {
      icon: <TwitterIcon />,
      link: "https://github.com/usrivastava92",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/usrivastava92",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://github.com/usrivastava92",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://github.com/usrivastava92" },
        { name: "freebies", href: "https://github.com/usrivastava92" },
        { name: "premium tools", href: "https://github.com/usrivastava92" },
        { name: "blog", href: "https://github.com/usrivastava92" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://github.com/usrivastava92" },
        { name: "bits & snippets", href: "https://github.com/usrivastava92" },
        { name: "affiliate program", href: "https://github.com/usrivastava92" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://github.com/usrivastava92" },
        { name: "knowledge center", href: "https://github.com/usrivastava92" },
        { name: "custom development", href: "https://github.com/usrivastava92" },
        { name: "sponsorships", href: "https://github.com/usrivastava92" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://github.com/usrivastava92" },
        { name: "privacy policy", href: "https://github.com/usrivastava92" },
        { name: "licenses (EULA)", href: "https://github.com/usrivastava92" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {process.env.REACT_APP_TITLE} by{" "}
      <MKTypography
        component="a"
        href="https://github.com/usrivastava92"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Utkarsh Srivastava
      </MKTypography>
      .
    </MKTypography>
  ),
};
