// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "GetFitter",
    image: logoCT,
    route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Apps", href: "/apps" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [{ name: "Apple store", href: "/app-store-url" }],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/pages/landing-pages/contact-us" },
        // { name: "knowledge center", href: "/pages/landing-pages/knowledge-center" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/pages/terms" },
        { name: "privacy policy", href: "/pages/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} COGNOTECH OÜ
    </MKTypography>
  ),
};
