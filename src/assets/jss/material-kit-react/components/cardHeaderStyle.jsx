import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader
} from "assets/jss/material-kit-react.jsx";
const cardHeaderStyle = theme => ({
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader: {
    color: "#fff",
    background:
      "linear-gradient(60deg, " +
      theme.palette.primary.light +
      ", " +
      theme.palette.primary.main +
      ")",
    boxShadow:
      "0 12px 20px -10px " +
      theme.palette.primary.shadow +
      ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px " +
      theme.palette.primary.shadow
  }
});

export default cardHeaderStyle;
