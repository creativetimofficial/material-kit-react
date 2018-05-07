import React from "react";
import { withStyles, IconButton } from "material-ui";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import iconButtonStyle from "assets/jss/material-kit-react/components/iconButtonStyle.jsx";

function IconCustomButton({ ...props }) {
  const { classes, color, children, className, ...rest } = props;
  return (
    <IconButton
      {...rest}
      className={
        classes.button +
        (color ? " " + classes[color] : "") +
        (className ? " " + className : "")
      }
    >
      {children}
    </IconButton>
  );
}

IconCustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent",
    "facebook",
    "twitter",
    "google",
    "github"
  ]),
  simple: PropTypes.bool,
  disabled: PropTypes.bool
};

export default withStyles(iconButtonStyle)(IconCustomButton);
