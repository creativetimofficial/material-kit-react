import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeProps = `Footer.propTypes = {
  whiteFont: PropTypes.bool
};
`;

function Footer({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Footer</h1>
      <p>This is the bottom navigation of our demo app.</p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>src/assets/jss/material-kit-react/components/footerStyle.js</code>
        .
      </p>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Footer;
