import React from "react";
import { withStyles, AppBar, Toolbar, Hidden } from "material-ui";
import { List, BugReport } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const style = theme => ({
  appBar: {
    color: "#fff",
    backgroundColor: "#00acc1 !important",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  title: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    position: "relative",
    height: "50px",
    fontSize: "1.125rem",
    lineHeight: "46px",
    display: "inline-block",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    textDecoration: "none"
  },
  iconLink: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    fontSize: "18px",
    textDecoration: "none",
    lineHeight: "20px",
    marginTop: "-4px",
    marginLeft: "12px"
  },
  rightLinks: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    fontSize: "12px",
    marginLeft: "12px",
    textDecoration: "none",
    display: "inline-flex",
    position: "relative",
    top: "2px"
  },
  rightLinksText: {
    position: "relative"
  },
  flex: {
    [theme.breakpoints.up("md")]: {
      flex: "1"
    }
  },
  block: {
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  }
});

class DocHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.block}>
          <div className={classes.flex}>
            <NavLink to="/" activeClassName="active" className={classes.title}>
              Material Kit React
            </NavLink>
            <Hidden mdDown>
              <a
                href="https://github.com/creativetimofficial/material-kit-react"
                className={classes.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/CreativeTim"
                className={classes.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </Hidden>
          </div>
          <div>
            <NavLink
              to="/"
              activeClassName="active"
              className={classes.rightLinks}
            >
              <List />{" "}
              <span className={classes.rightLinksText}>Live Preview</span>
            </NavLink>
            <a
              href="https://github.com/creativetimofficial/material-kit-react/issues"
              className={classes.rightLinks}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BugReport />{" "}
              <span className={classes.rightLinksText}>Report an issue</span>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(DocHeader);
