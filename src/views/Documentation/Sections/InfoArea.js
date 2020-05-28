import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
// core components
import InfoAreas from "components/InfoArea/InfoArea.js";

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
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";

export default function Example(){
  return (
    <InfoArea
      title="Marketing"
      description="We've created the marketing campaign of the website. It was a very interesting collaboration."
      icon={Timeline}
      iconColor="rose"
    />
  );
}`;
const codeProps = `InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};`;

function InfoArea({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <h1>InfoArea</h1>
      <p>
        This component was made by us to make it a bit more easier for you to
        render some information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>src/assets/jss/material-kit-react/components/infoStyle.js</code>.
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <InfoAreas
          title="Marketing"
          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
          icon={Timeline}
          iconColor="rose"
        />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default withStyles(styles)(InfoArea);
