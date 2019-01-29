import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import Badge from "components/Badge/Badge.jsx";

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

const importExamples = `import Badge from 'components/Badge/Badge.jsx';`;

const importStylesExamples = `import badgeStyle from "assets/jss/material-kit-react/components/badgeStyle.jsx"`;

const exampleCode = `<Button color="primary">Notifications{" "}<Badge>4</Badge></Button>`;

const exampleCodeContextual = `<Badge color="primary">primary</Badge>
<Badge color="info">info</Badge>
<Badge color="success">success</Badge>
<Badge color="danger">danger</Badge>
<Badge color="warning">warning</Badge>
<Badge color="rose">rose</Badge>`;

const codeProps = `Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};`;

class Badges extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Badges</h1>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in
          <br />{" "}
          <code>
            src/assets/jss/material-kit-react/components/badgeStyle.jsx
          </code>
          .
        </p>
        <h2>Imports</h2>
        <p>If you want to use our predefined components:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {importExamples}
        </SyntaxHighlighter>
        <p>If you want to use our styles on something else:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {importStylesExamples}
        </SyntaxHighlighter>
        <h2>Example</h2>
        <p>
          Badges can be used as part of links or buttons to provide a counter.
        </p>
        <div className={classes.bdExample}>
          <Button color="primary">
            Notifications <Badge>4</Badge>
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleCode}
        </SyntaxHighlighter>
        <h2>Contextual variations</h2>
        <div className={classes.bdExample}>
          <Badge color="primary">primary</Badge>
          <Badge color="info">info</Badge>
          <Badge color="success">success</Badge>
          <Badge color="danger">danger</Badge>
          <Badge color="warning">warning</Badge>
          <Badge color="rose">rose</Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleCodeContextual}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeProps}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default withStyles(styles)(Badges);
