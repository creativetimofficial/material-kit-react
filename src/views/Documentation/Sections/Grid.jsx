/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeImportContainer = `// instead of importing the container from material-ui
import Grid from 'material-ui/Grid';

// you would import our component like this
import GridContainer from "components/Grid/GridContainer.js";`;
const codeExampleContainer = `// instead of using the container from material-ui
<Grid container {...props}>
  ...
</Grid container {...props}>

// you would use our component like this
<GridContainer {...props}>
  ...
</GridContainer {...props}>`;

const codeImportItem = `// instead of importing the item from material-ui
import Grid from 'material-ui/Grid';

// you would import our component like this
import GridItem from "components/Grid/GridItem.js";`;
const codeExampleItem = `// instead of using the item from material-ui
<Grid item {...props}>
  ...
</Grid>

// you would use our component like this
<GridItem {...props}>
  ...
</GridItem>`;

function Grid({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Grid</h1>
      <p>
        We've decided to extend the default <code>Grid</code> component from{" "}
        <a
          href="https://material-ui-next.com/layout/grid/?ref=creativetim"
          target="_blank"
        >
          Material-UI
        </a>
        .
      </p>
      <p>We've done this so we could add some personal styles to them.</p>
      <h2>GridContainer</h2>
      <p>
        It's the same as <code>&lt;Grid container&gt;</code> component from
        Material-UI but with some extra styling, to make flow better with our
        components.
      </p>
      <h3>Usage</h3>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImportContainer}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleContainer}
      </SyntaxHighlighter>
      <h2>GridItem</h2>
      <p>
        It's the same as <code>&lt;Grid item&gt;</code> component from
        Material-UI but with some extra styling, to make flow better with our
        components.
      </p>
      <h3>Usage</h3>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImportItem}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleItem}
      </SyntaxHighlighter>
    </div>
  );
}

export default Grid;
