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

export default function Typography(){
  return (
    <Quote
      text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
      author=" Kanye West, Musician"
    />
  );
}`;
const codeExampleC = `import React from 'react';
// core components
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";

export default function Typography(){
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
}`;

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
