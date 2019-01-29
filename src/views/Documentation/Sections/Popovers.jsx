import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.jsx";
import popoverStyles from "assets/jss/material-kit-react/popoverStyles.jsx";

const styles = {
  ...popoverStyles,
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
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.jsx";

import popoverStyles from "assets/jss/material-kit-react/popoverStyles.jsx";

class Popovers extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node;
                }}
                onClick={() => this.handleClickButton("openLeft")}
              >
                On left
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openLeft}
                anchorEl={this.anchorElLeft}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openLeft")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
              >
                On top
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node;
                }}
                onClick={() => this.handleClickButton("openBottom")}
              >
                On bottom
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openBottom}
                anchorEl={this.anchorElBottom}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openBottom")}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node;
                }}
                onClick={() => this.handleClickButton("openRight")}
              >
                On right
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openRight}
                anchorEl={this.anchorElRight}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openRight")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
      </div>
    );
  }
}

export default withStyles(popoverStyles)(Popovers);`;

class Popovers extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Popovers</h1>
        <h2>Styles</h2>
        <p>
          You will find all the styles for these components in
          <br />
          <code>src/assets/jss/material-kit-react/popoverStyles.jsx</code>.
        </p>
        <h2>Example</h2>
        <div className={classes.bdExample}>
          <Button
            buttonRef={node => {
              this.anchorElLeft = node;
            }}
            onClick={() => this.handleClickButton("openLeft")}
          >
            On left
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={this.state.openLeft}
            anchorEl={this.anchorElLeft}
            anchorReference={"anchorEl"}
            onClose={() => this.handleClosePopover("openLeft")}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on left</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover. Here
              will be some very useful information about his popover.
            </div>
          </Popover>
          <Button
            buttonRef={node => {
              this.anchorElTop = node;
            }}
            onClick={() => this.handleClickButton("openTop")}
          >
            On top
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={this.state.openTop}
            anchorEl={this.anchorElTop}
            anchorReference={"anchorEl"}
            onClose={() => this.handleClosePopover("openTop")}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on top</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <Button
            buttonRef={node => {
              this.anchorElBottom = node;
            }}
            onClick={() => this.handleClickButton("openBottom")}
          >
            On bottom
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={this.state.openBottom}
            anchorEl={this.anchorElBottom}
            anchorReference={"anchorEl"}
            onClose={() => this.handleClosePopover("openBottom")}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on bottom</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <Button
            buttonRef={node => {
              this.anchorElRight = node;
            }}
            onClick={() => this.handleClickButton("openRight")}
          >
            On right
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={this.state.openRight}
            anchorEl={this.anchorElRight}
            anchorReference={"anchorEl"}
            onClose={() => this.handleClosePopover("openRight")}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on right</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please check out the{" "}
          <a
            href="https://material-ui-next.com/utils/popovers/#popovers"
            target="_blank"
            rel="noopener noreferrer"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Popovers);
