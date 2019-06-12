import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

import badgeStyle from "assets/jss/material-kit-react/components/badgeStyle.jsx";

const makeComponentStyles = makeStyles(() => ({
  ...badgeStyle
}));

function Badge({ ...props }) {
  const { color, children } = props;

  const classes = makeComponentStyles();

  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  children: PropTypes.node
};

export default Badge;
