import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeImport = `import Parallax from "components/Parallax/Parallax.js";`;
const codeExample = `<Parallax filter image={require("path/to/your/image")} />`;
const codeProps = `Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};`;

class Parallax extends React.Component {
  render() {
    return (
      <div>
        <h1>Parallax</h1>
        <h2>Styles</h2>
        <p>
          You will find all the styles for these components in
          <br />
          <code>
            src/assets/jss/material-kit-react/components/parallaxStyle.js
          </code>
          .
        </p>
        <h2>Example Code</h2>
        <p>
          If you want a nice parallax like that in our demo pages, you can add
          the following code at the beginning of your page.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
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
}

export default Parallax;
