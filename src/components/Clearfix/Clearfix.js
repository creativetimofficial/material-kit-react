import React from "react";

// mterial-ui components
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Clearfix() {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}

Clearfix.propTypes = {};
