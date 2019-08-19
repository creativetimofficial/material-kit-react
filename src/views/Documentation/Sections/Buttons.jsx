/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Button from "components/CustomButtons/Button.js";

const styles = {
  socialButtonsIcons: {
    position: "relative",
    fontSize: "18px",
    marginTop: "-2px"
  },
  marginRight: {
    marginRight: "5px"
  },
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

const importExamples = `import Button from 'components/CustomButtons/Button.jsx';`;

const examples = `<Button type="button">Default</Button>
<Button type="button" color="primary">Primary</Button>
<Button type="button" color="info">Info</Button>
<Button type="button" color="success">Success</Button>
<Button type="button" color="danger">Danger</Button>
<Button type="button" color="warning">Warning</Button>
<Button type="button" color="rose">Rose</Button>`;

const importStyle = `import Favorite from '@material-ui/icons/Favorite';
import Button from 'components/CustomButtons/Button.jsx';`;

const style = `<Button color="primary">Default</Button>
<Button color="primary" round>Round</Button>
<Button color="primary" round><Favorite /> With Icon</Button>
<Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
<Button color="primary" simple>Simple</Button>`;

const disabled = `<Button color="primary" disabled>Default</Button>
<Button color="primary" round disabled>Round</Button>`;

const socials = `import React from "react";
// material-ui components
// @material-ui/icons
// core components
import Button from 'components/CustomButtons/Button.jsx';

export default function Socials(){
  return (
    <div>
      <Button color="twitter">
        <i
          className={"fab fa-twitter"}
        />{" "}
        Connect with Twitter
      </Button>
      <Button color="twitter" justIcon>
        <i className={ " fab fa-twitter"} />
      </Button>
      <Button justIcon round color="twitter">
        <i
          className={"fab fa-twitter"}
        />
      </Button>
      <Button color="twitter" simple>
        <i
          className={" fab fa-twitter"}
        />
      </Button>
      <Button color="twitter" simple>
        <i
          className={" fab fa-twitter"}
        />{" "}
        Connect with Twitter
      </Button>
      <br />
      <Button color="facebook">
        <i
          className={" fab fa-facebook-square"}
        />{" "}
        Share · 2.2k
      </Button>
      <Button color="facebook" justIcon>
        <i className={ " fab fa-facebook"} />
      </Button>
      <Button justIcon round color="facebook">
        <i
          className={" fab fa-facebook"}
        />
      </Button>
      <Button color="facebook" simple>
        <i
          className={" fab fa-facebook-square"}
        />
      </Button>
      <Button color="facebook" simple>
        <i
          className={" fab fa-facebook-square"}
        />{" "}
        Share · 2.2k
      </Button>
      <br />
      <Button color="google">
        <i
          className={" fab fa-google-plus-square"}
        />{" "}
        Share on Google+
      </Button>
      <Button color="google" justIcon>
        <i className={ " fab fa-google"} />
      </Button>
      <Button justIcon round color="google">
        <i
          className={" fab fa-google"}
        />
      </Button>
      <Button color="google" simple>
        <i
          className={" fab fa-google"}
        />
      </Button>
      <Button color="google" simple>
        <i
          className={" fab fa-google-square"}
        />{" "}
        Share on Google+
      </Button>
      <br />
        <Button color="github">
          <i
            className={" fab fa-github"}
          />{" "}
          Connect with Github
        </Button>
        <Button color="github" justIcon>
          <i className={ " fab fa-github"} />
        </Button>
        <Button justIcon round color="github">
          <i
            className={" fab fa-github"}
          />
        </Button>
        <Button color="github" simple>
          <i
            className={" fab fa-github"}
          />
        </Button>
        <Button color="github" simple>
          <i
            className={" fab fa-github"}
          />{" "}
          Connect with Github
        </Button>
    </div>
  );
}`;

const buttonProp = `RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool
};`;

export default function Buttons() {
  const classes = useStyles();
  return (
    <div>
      <h1>Buttons</h1>
      <p>
        Use Material Kit's React custom button styles for actions in forms,
        dialogs, and more with support for multiple states, and more.
      </p>
      <p>
        You will find all of our restyled buttons from material-ui in{" "}
        <code>src/components/CustomButtons</code>.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>src/assets/jss/material-kit-react/components/buttonStyle.js</code>
        <br /> and
        <br />
        <code>
          src/assets/jss/material-kit-react/components/iconButtonStyle.js
        </code>
        .
      </p>
      <h2>Examples</h2>
      <p>
        Material Kit React has changed the predefined button styles from
        Material UI, each serving its own semantic purpose, with a few extras
        thrown in for more control.
      </p>
      <div className={classes.bdExample}>
        <Button type="button">Default</Button>
        <Button type="button" color="primary">
          Primary
        </Button>
        <Button type="button" color="info">
          Info
        </Button>
        <Button type="button" color="success">
          Success
        </Button>
        <Button type="button" color="danger">
          Danger
        </Button>
        <Button type="button" color="warning">
          Warning
        </Button>
        <Button type="button" color="rose">
          Rose
        </Button>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {importExamples}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {examples}
      </SyntaxHighlighter>
      <h2>Style Buttons</h2>
      <div className={classes.bdExample}>
        <Button color="primary">Default</Button>
        <Button color="primary" round>
          Round
        </Button>
        <Button color="primary" round>
          <Favorite /> With Icon
        </Button>
        <Button justIcon round color="primary">
          <Favorite style={{ color: "#FFFFFF" }} />
        </Button>
        <Button color="primary" simple>
          Simple
        </Button>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {importStyle}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {style}
      </SyntaxHighlighter>
      <h2>Disabled state</h2>
      <p>
        Make buttons look inactive by adding the disabled boolean attribute to
        any <code>Button</code> element.
      </p>
      <div className={classes.bdExample}>
        <Button color="primary" disabled>
          Default
        </Button>
        <Button color="primary" round disabled>
          Round
        </Button>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {disabled}
      </SyntaxHighlighter>
      <h2>Social buttons</h2>
      <div className={classes.bdExample}>
        <Button color="twitter">
          <i className={"fab fa-twitter"} /> Connect with Twitter
        </Button>
        <Button color="twitter" justIcon>
          <i className={" fab fa-twitter"} />
        </Button>
        <Button justIcon round color="twitter">
          <i className={" fab fa-twitter"} />
        </Button>
        <Button color="twitter" simple justIcon>
          <i className={"fab fa-twitter"} />
        </Button>
        <Button color="twitter" simple>
          <i className={"fab fa-twitter"} /> Connect with Twitter
        </Button>
        <br />
        <Button color="facebook">
          <i className={"fab fa-facebook-square"} /> Share · 2.2k
        </Button>
        <Button color="facebook" justIcon>
          <i className={" fab fa-facebook"} />
        </Button>
        <Button justIcon round color="facebook">
          <i className={" fab fa-facebook"} />
        </Button>
        <Button color="facebook" simple justIcon>
          <i className={"fab fa-facebook-square"} />
        </Button>
        <Button color="facebook" simple>
          <i className={"fab fa-facebook-square"} /> Share · 2.2k
        </Button>
        <br />
        <Button color="google">
          <i className={"fab fa-google-plus-square"} /> Share on Google+
        </Button>
        <Button color="google" justIcon>
          <i className={" fab fa-google"} />
        </Button>
        <Button justIcon round color="google">
          <i className={" fab fa-google"} />
        </Button>
        <Button color="google" simple justIcon>
          <i className={"fab fa-google"} />
        </Button>
        <Button color="google" simple>
          <i className={"fab fa-google-square"} /> Share on Google+
        </Button>
        <br />
        <Button color="github">
          <i className={"fab fa-github"} /> Connect with Github
        </Button>
        <Button color="github" justIcon>
          <i className={" fab fa-github"} />
        </Button>
        <Button justIcon round color="github">
          <i className={" fab fa-github"} />
        </Button>
        <Button color="github" simple justIcon>
          <i className={"fab fa-github"} />
        </Button>
        <Button color="github" simple>
          <i className={"fab fa-github"} /> Connect with Github
        </Button>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {socials}
      </SyntaxHighlighter>
      <h2>Properties</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {buttonProp}
      </SyntaxHighlighter>
      <h2>Material UI Buttons</h2>
      <p>
        For more props and buttons please check out the{" "}
        <a
          href="https://material-ui-next.com/demos/buttons/?ref=creativetim"
          target="_blank"
        >
          material-ui buttons section
        </a>
        .
      </p>
    </div>
  );
}
