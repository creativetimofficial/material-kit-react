import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";

import Paginations from "components/Pagination/Pagination.js";

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

const codeExample = `import React from 'react';

import Paginations from "components/Pagination/Pagination.js";

export default function Example(){
  return (
    <Paginations
      pages={[
        { text: "PREV" },
        { text: 1 },
        { text: 2 },
        { active: true, text: 3 },
        { text: 4 },
        { text: 5 },
        { text: "NEXT" }
      ]}
      color="info"
    />
  );
}`;
const codeProps = `Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};`;

function Pagination({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <h1>Pagination</h1>
      <p>
        We've created this special component due to the fact that you would have
        needed to write a lot of code to obtain a small component. So, it was
        done to make your life easier.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>
          src/assets/jss/material-kit-react/components/paginationStyle.js
        </code>
        .
      </p>
      <h2>Example</h2>
      <div className={classes.bdExample}>
        <Paginations
          pages={[
            { text: "PREV" },
            { text: 1 },
            { text: 2 },
            { active: true, text: 3 },
            { text: 4 },
            { text: 5 },
            { text: "NEXT" }
          ]}
          color="info"
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

export default withStyles(styles)(Pagination);
