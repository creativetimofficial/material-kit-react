import { container } from "assets/jss/material-kit-react.jsx";

import image from "assets/img/city.jpg";

const signupStyle = {
  section: {
    height: "90vh",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")"
  },
  container,
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  }
};

export default signupStyle;
