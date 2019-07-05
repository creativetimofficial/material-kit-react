/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";

class SectionNotifications extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="notifications">
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Notifications</h3>
          </div>
        </div>
        <SnackbarContent
          message={
            <span>
              <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop
              looking at your phone and find them...
            </span>
          }
          close
          color="info"
          icon="info_outline"
        />
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
              looking at your phone and find them...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
        <SnackbarContent
          message={
            <span>
              <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
              looking at your phone and find them...
            </span>
          }
          close
          color="warning"
          icon={Warning}
        />
        <SnackbarContent
          message={
            <span>
              <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
              looking at your phone and find them...
            </span>
          }
          close
          color="danger"
          icon="info_outline"
        />
        <Clearfix />
      </div>
    );
  }
}

SectionNotifications.propTypes = {
  classes: PropTypes.object
};

export default withStyles(notificationsStyles)(SectionNotifications);
