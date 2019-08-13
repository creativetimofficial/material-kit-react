import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeImport = `import Clearfix from "components/Clearfix/Clearfix.js";`;
const codeExample = `<Clearfix />`;

export default function ClearExample() {
  return (
    <div>
      <h1>Clearfix</h1>
      <p>
        A clearfix is a way for an element to automatically clear its child
        elements, so that you don't need to add additional markup. It's
        generally used in float layouts where elements are floated to be stacked
        horizontally.
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
