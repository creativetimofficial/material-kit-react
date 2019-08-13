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
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";

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

const codeExampleH = `<h1>h1. Material Kit React heading</h1>
<h2>h2. Material Kit React heading</h2>
<h3>h3. Material Kit React heading</h3>
<h4>h4. Material Kit React heading</h4>
<h5>h5. Material Kit React heading</h5>
<h6>h6. Material Kit React heading</h6>
<h2>
  Header with small subtitle<br />
  <small>Use &lt;small&gt; tag for the headers</small>
</h2>`;
const codeExampleP = `<p>
  I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>`;
const codeExampleQ = `import React from 'react';
// core components
import Quote from "components/Typography/Quote.js";

function Typography({...props}){
  return (
    <Quote
      text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
      author=" Kanye West, Musician"
    />
  );
}

export default Typography;
`;
const codeExampleC = `import React from 'react';
// core components
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";

function Typography({...props}){
  return (
    <div>
      <Muted>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Muted>
      <Primary>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Primary>
      <Info>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Info>
      <Success>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Success>
      <Warning>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Warning>
      <Danger>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Danger>
    </div>
  );
}

export default Typography;
`;

function Typography({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <h1>Typography</h1>
      <p>
        Documentation and examples for Material Kit React typography, including
        global settings, headings, body text, lists, and more.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for these components in
        <br />{" "}
        <code>
          src/assets/jss/material-kit-react/components/typographyStyle.js
        </code>
        .
      </p>
      <h2>
        <b>Headings</b>
      </h2>
      <div className={classes.bdExample}>
        <h1>h1. Material Kit React heading</h1>
        <h2>h2. Material Kit React heading</h2>
        <h3>h3. Material Kit React heading</h3>
        <h4>h4. Material Kit React heading</h4>
        <h5>h5. Material Kit React heading</h5>
        <h6>h6. Material Kit React heading</h6>
        <h2>
          Header with small subtitle
          <br />
          <small>Use &lt;small&gt; tag for the headers</small>
        </h2>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleH}
      </SyntaxHighlighter>
      <h2>
        <b>Paragraph</b>
      </h2>
      <div className={classes.bdExample}>
        <p>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers. I understand culture. I am the
          nucleus. I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that things could be
          at.
        </p>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleP}
      </SyntaxHighlighter>
      <h2>
        <b>Quote</b>
      </h2>
      <div className={classes.bdExample}>
        <Quote
          text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
          author=" Kanye West, Musician"
        />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleQ}
      </SyntaxHighlighter>
      <h2>
        <b>Text Colors</b>
      </h2>
      <div className={classes.bdExample}>
        <Muted>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Muted>
        <Primary>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Primary>
        <Info>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Info>
        <Success>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Success>
        <Warning>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Warning>
        <Danger>
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers...
        </Danger>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleC}
      </SyntaxHighlighter>
    </div>
  );
}

export default withStyles(styles)(Typography);
