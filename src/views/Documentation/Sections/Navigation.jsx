/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const headerProp = `Header.defaultProps = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};`;

export default function Navigation() {
  return (
    <div>
      <h1>Navigation</h1>
      <h2>Styles</h2>
      <p>
        You will find all the styles for these components in
        <br />
        <code>src/assets/jss/material-kit-react/components/headerStyle.js</code>
        <br />
        <code>
          src/assets/jss/material-kit-react/components/headerLinksStyle.js
        </code>
        .
      </p>
      <p>The classic Material UI Appbar was restyled.</p>
      <p>
        You will find this component in{" "}
        <code>src/components/Header/Header.jsx</code>. In this component there
        is just the structure of the navbar. The links can be found in{" "}
        <code>src/components/Header/HeaderLinks.jsx</code>. We've done this
        because we want our users to be able to add their own links easily.
      </p>
      <p>
        You can choose between 9 colors by using the <code>color</code>{" "}
        property.
      </p>
      <p>
        If this property is not set, then the Appbar will be <code>white</code>.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {headerProp}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        Please check out the{" "}
        <a
          href="https://material-ui-next.com/demos/app-bar/?ref=creativetim"
          target="_blank"
        >
          official material-ui documentation
        </a>
        .
      </p>
    </div>
  );
}
