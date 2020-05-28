/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.js";
import popoverStyles from "assets/jss/material-kit-react/popoverStyles.js";

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

const useStyles = makeStyles(styles);

const codeExample = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/popoverStyles.js";

const useStyles = makeStyles(styles);

export default function Popovers() {
  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  return (
    <div>
      <Button onClick={event => setAnchorElLeft(event.currentTarget)}>
        On left
      </Button>
      <Popover
        classes={{
          paper: classes.popover
        }}
        open={Boolean(anchorElLeft)}
        anchorEl={anchorElLeft}
        onClose={() => setAnchorElLeft(null)}
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
      <Button onClick={event => setAnchorElTop(event.currentTarget)}>
        On top
      </Button>
      <Popover
        classes={{
          paper: classes.popover
        }}
        open={Boolean(anchorElTop)}
        anchorEl={anchorElTop}
        onClose={() => setAnchorElTop(null)}
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
      <Button onClick={event => setAnchorElBottom(event.currentTarget)}>
        On bottom
      </Button>
      <Popover
        classes={{
          paper: classes.popover
        }}
        open={Boolean(anchorElBottom)}
        anchorEl={anchorElBottom}
        onClose={() => setAnchorElBottom(null)}
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
      <Button onClick={event => setAnchorElRight(event.currentTarget)}>
        On right
      </Button>
      <Popover
        classes={{
          paper: classes.popover
        }}
        open={Boolean(anchorElRight)}
        anchorEl={anchorElRight}
        onClose={() => setAnchorElRight(null)}
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
}`;

export default function Popovers() {
  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  return (
    <div>
      <h1>Popovers</h1>
      <h2>Styles</h2>
      <p>
        You will find all the styles for these components in
        <br />
        <code>src/assets/jss/material-kit-react/popoverStyles.js</code>.
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <Button onClick={event => setAnchorElLeft(event.currentTarget)}>
          On left
        </Button>
        <Popover
          classes={{
            paper: classes.popover
          }}
          open={Boolean(anchorElLeft)}
          anchorEl={anchorElLeft}
          onClose={() => setAnchorElLeft(null)}
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
        <Button onClick={event => setAnchorElTop(event.currentTarget)}>
          On top
        </Button>
        <Popover
          classes={{
            paper: classes.popover
          }}
          open={Boolean(anchorElTop)}
          anchorEl={anchorElTop}
          onClose={() => setAnchorElTop(null)}
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
        <Button onClick={event => setAnchorElBottom(event.currentTarget)}>
          On bottom
        </Button>
        <Popover
          classes={{
            paper: classes.popover
          }}
          open={Boolean(anchorElBottom)}
          anchorEl={anchorElBottom}
          onClose={() => setAnchorElBottom(null)}
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
        <Button onClick={event => setAnchorElRight(event.currentTarget)}>
          On right
        </Button>
        <Popover
          classes={{
            paper: classes.popover
          }}
          open={Boolean(anchorElRight)}
          anchorEl={anchorElRight}
          onClose={() => setAnchorElRight(null)}
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
          href="https://material-ui-next.com/utils/popovers/#popovers?ref=creativetim"
          target="_blank"
        >
          official material-ui documentation
        </a>
        .
      </p>
    </div>
  );
}
