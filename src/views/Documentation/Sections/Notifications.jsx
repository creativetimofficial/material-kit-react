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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

const styles = {
  bdExample: {
    padding: "1.5rem",
    margin: "1rem -15px",
    position: "relative",
    marginRight: "0",
    marginBottom: "-8px",
    marginLeft: "0",
    borderWidth: ".2rem",
    border: "solid rgb(245, 242, 240)"
  }
};

const codeExample = `import React from "react";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <SnackbarContent
          message={
              <span>
                <b>INFO ALERT:</b> You've got some friends nearby, stop looking
                at your phone and find them...
              </span>
          }
          close
          color="info"
          icon="info_outline"
        />
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
        <SnackbarContent
          message={
            <span>
              <b>WARNING ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="warning"
          icon={Warning}
        />
        <SnackbarContent
          message={
            <span>
              <b>DANGER ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
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

export default Notifications;`;

const snackbarContent = `SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.func
};`;

class Notifications extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Notifications / Snackbars</h1>
        <h2>Styles</h2>
        <p>
          You will find all the styles for these components in
          <br />
          <code>
            src/assets/jss/material-kit-react/components/snackbarContentStyle.jsx
          </code>
          .
        </p>
        <p>
          We restyled the classic Material UI SnackbarContent and gave it a more
          attractive look.
        </p>
        <div className={classes.bdExample}>
          <SnackbarContent
            message={
              <span>
                <b>INFO ALERT:</b> You've got some friends nearby, stop looking
                at your phone and find them...
              </span>
            }
            close
            color="info"
            icon="info_outline"
          />
          <SnackbarContent
            message={
              <span>
                <b>SUCCESS ALERT:</b> You've got some friends nearby, stop
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
                <b>WARNING ALERT:</b> You've got some friends nearby, stop
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
                <b>DANGER ALERT:</b> You've got some friends nearby, stop
                looking at your phone and find them...
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />
          <Clearfix />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {snackbarContent}
        </SyntaxHighlighter>
        <p>
          Beside these props, you can check out the{" "}
          <a
            href="https://material-ui-next.com/demos/snackbars/?ref=creativetim"
            target="_blank"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Notifications);
