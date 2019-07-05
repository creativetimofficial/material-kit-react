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

const codeImport = `import Clearfix from "components/Clearfix/Clearfix.jsx";`;
const codeExample = `<Clearfix />`;

class ClearExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Clearfix</h1>
        <p>
          A clearfix is a way for an element to automatically clear its child
          elements, so that you don't need to add additional markup. It's
          generally used in float layouts where elements are floated to be
          stacked horizontally.
        </p>
        <p>
          You can see it being used in{" "}
          <code>src/views/Components/Sections/SectionNotifications.jsx</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default ClearExample;
