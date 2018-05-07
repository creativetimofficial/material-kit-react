import { container, cardTitle } from "assets/jss/material-kit-react.jsx";

import customCheckboxRadioSwitchStyle from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  cardSignup: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);",
    marginBottom: "100px",
    padding: "40px 0px"
  },
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "center !important",
    marginBottom: "0.75rem"
  },
  ...customCheckboxRadioSwitchStyle,
  socials: {
    marginTop: "0",
    position: "absolute",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  textCenter: {
    textAlign: "center"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: "#495057"
  },
  form: {
    margin: "0"
  }
};

export default signupPageStyle;
