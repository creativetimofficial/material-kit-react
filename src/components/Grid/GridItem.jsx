import React from "react";
import { withStyles, Grid } from "material-ui";

const style = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
