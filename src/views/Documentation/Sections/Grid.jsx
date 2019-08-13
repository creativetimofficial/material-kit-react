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
/* eslint-disable */
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
        We've decided to extend the default <code>Grid</code> component from
        {
          " "
          // eslint-disable-next-line
        }
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
