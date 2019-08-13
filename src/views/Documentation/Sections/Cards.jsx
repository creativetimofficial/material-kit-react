import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Quote from "components/Typography/Quote.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  },
  bdExample: {
    padding: "1.5rem",
    margin: "1rem -15px",
    position: "relative",
    marginRight: "0",
    marginBottom: "-8px",
    marginLeft: "0",
    borderWidth: ".2rem",
    border: "solid rgb(245, 242, 240)"
  },
  textRight: {
    textAlign: "right"
  }
};

const codeExample = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{width: "20rem"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="..."
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>Card title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button color="primary">Do something</Button>
      </CardBody>
    </Card>
  );
}`;

const codeExampleBody = `<Card>
  <CardBody>
    This is some text within a card body.
  </CardBody>
</Card>`;

const codeExampleTTL = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{width: "20rem"}}>
      <CardBody>
        <h4 className={classes.cardTitle}>Card Title</h4>
        <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
        <p>
          Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}>
          Card link
        </a>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}>
          Another link
        </a>
      </CardBody>
    </Card>
  );
}`;

const codeExampleHeader = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{width: "20rem"}}>
      <CardHeader color="warning">Featured</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a
          natural lead-in to additional content.
        </p>
        <Button color="primary">Do something</Button>
      </CardBody>
    </Card>
  );
}`;

const codeExampleQuote = `import React from "react";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";

export default function Cards() {
  return (
    <Card>
      <CardHeader color="success">Quote</CardHeader>
      <CardBody>
        <Quote
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
          author="Someone famous in Source Title"
        />
      </CardBody>
    </Card>
  );
}

export default Cards;`;

const codeExampleCentered = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger">Featured</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a
          natural lead-in to additional content.
        </p>
        <Button color="primary">Do something</Button>
      </CardBody>
      <CardFooter className={classes.textMuted}>
        2 days ago
      </CardFooter>
    </Card>
  );
}`;

const codeExampleText = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return(
    <div>
      <Card style={{width: "20rem"}}>
        <CardBody>
          <h4 className={classes.cardTitle}>Special title treatment</h4>
          <p>
            With supporting text below as a
            natural lead-in to additional content.
          </p>
          <Button color="primary">Do something</Button>
        </CardBody>
      </Card>
      <Card className={classes.textCenter} style={{width: "20rem"}}>
        <CardBody>
          <h4 className={classes.cardTitle}>Special title treatment</h4>
          <p>
            With supporting text below as a
            natural lead-in to additional content.
          </p>
          <Button color="primary">Do something</Button>
        </CardBody>
      </Card>
      <Card className={classes.textRight} style={{width: "20rem"}}>
        <CardBody>
          <h4 className={classes.cardTitle}>Special title treatment</h4>
          <p>
            With supporting text below as a
            natural lead-in to additional content.
          </p>
          <Button color="primary">Do something</Button>
        </CardBody>
      </Card>
    </div>
  );
  }`;

const codeExampleCaps = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return(
    <div>
      <Card>
        <img className={classes.imgCardTop} src="..." alt="Card-img-cap" />
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </CardBody>
        <img className={classes.imgCardBottom} src="..." alt="Card-img-cap" />
      </Card>
    </div>
  );
};`;

const codeExampleOverlay = `import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return(
    <Card>
      <img className={classes.imgCard} src="..." alt="Card-img" />
      <div className={classes.imgCardOverlay}>
        <h4 className={classes.cardTitle}>Card title</h4>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>Last updated 3 mins ago</p>
      </div>
    </Card>
  );
}`;

const codeProps = `Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool
};

CardBody.propTypes = {
  className: PropTypes.string
};

CardFooter.propTypes = {
  className: PropTypes.string
};

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool
};`;

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <div>
      <h1>Cards</h1>
      <h2>Styles</h2>
      <p>
        You will find the styles for these components in
        <br />
        <code>src/assets/jss/material-kit-react/components/cardStyle.js</code>
        <br />
        <code>
          src/assets/jss/material-kit-react/components/cardHeaderStyle.js
        </code>
        <br />
        <code>
          src/assets/jss/material-kit-react/components/cardBodyStyle.js
        </code>
        <br />
        <code>
          src/assets/jss/material-kit-react/components/cardFooterStyle.js
        </code>
        .
      </p>
      <h2>Example</h2>
      <p>
        Below is an example of a basic card with mixed content and a fixed
        width. Cards have no fixed width to start, so they’ll naturally fill the
        full width of its parent element.
      </p>
      <div className={classes.bdExample}>
        <Card style={{ width: "20rem" }}>
          <img
            style={{ height: "180px", width: "100%", display: "block" }}
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163015186ee%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163015186ee%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Content types</h2>
      <p>
        Cards support a wide variety of content, including images, text, list
        groups, links, and more. Below are examples of what’s supported.
      </p>
      <h3>Body</h3>
      <p>
        The building block of a card is the CardBody. Use it whenever you need a
        padded section within a card.
      </p>
      <div className={classes.bdExample}>
        <Card>
          <CardBody>This is some text within a card body.</CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleBody}
      </SyntaxHighlighter>
      <h3>Titles, text, and links</h3>
      <p>
        Card titles are used by adding <code>classes.cardTitle</code> to a{" "}
        <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed
        next to each other by adding <code>classes.cardLink</code> to an{" "}
        <code>&lt;a&gt;</code> tag.
      </p>
      <div className={classes.bdExample}>
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Card Title</h4>
            <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#pablo"
              className={classes.cardLink}
              onClick={e => e.preventDefault()}
            >
              Card link
            </a>
            <a
              href="#pablo"
              className={classes.cardLink}
              onClick={e => e.preventDefault()}
            >
              Another link
            </a>
          </CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleTTL}
      </SyntaxHighlighter>
      <h3>Header and Footer</h3>
      <div className={classes.bdExample}>
        <Card style={{ width: "20rem" }}>
          <CardHeader color="warning">Featured</CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleHeader}
      </SyntaxHighlighter>
      <div className={classes.bdExample}>
        <Card>
          <CardHeader color="success">Quote</CardHeader>
          <CardBody>
            <Quote
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
              author="Someone famous in Source Title"
            />
          </CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleQuote}
      </SyntaxHighlighter>
      <div className={classes.bdExample}>
        <Card className={classes.textCenter}>
          <CardHeader color="danger">Featured</CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
          <CardFooter className={classes.textMuted}>2 days ago</CardFooter>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleCentered}
      </SyntaxHighlighter>
      <h2>Text alignment</h2>
      <div className={classes.bdExample}>
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
        <Card className={classes.textRight} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Do something</Button>
          </CardBody>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleText}
      </SyntaxHighlighter>
      <h2>Images</h2>
      <p>
        Cards include a few options for working with images. Choose from
        appending “image caps” at either end of a card, overlaying images with
        card content, or simply embedding the image in a card.
      </p>
      <h3>Image caps</h3>
      <p>
        Similar to headers and footers, cards can include top and bottom “image
        caps”—images at the top or bottom of a card.
      </p>
      <div className={classes.bdExample}>
        <Card>
          <img
            className={classes.imgCardTop}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226ee9%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226ee9%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small className={classes.textMuted}>
                Last updated 3 mins ago
              </small>
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small className={classes.textMuted}>
                Last updated 3 mins ago
              </small>
            </p>
          </CardBody>
          <img
            className={classes.imgCardBottom}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226eea%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226eea%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img-cap"
          />
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleCaps}
      </SyntaxHighlighter>
      <h3>Image overlays</h3>
      <p>
        Turn an image into a card background and overlay your card’s text.
        Depending on the image, you may or may not need additional styles or
        utilities.
      </p>
      <div className={classes.bdExample}>
        <Card>
          <img
            className={classes.imgCard}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226eeb%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226eeb%22%3E%3Crect%20width%3D%22843%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22154.35%22%3E843x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Card-img"
          />
          <div className={classes.imgCardOverlay}>
            <h4 className={classes.cardTitle}>Card title</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>Last updated 3 mins ago</p>
          </div>
        </Card>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleOverlay}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}
