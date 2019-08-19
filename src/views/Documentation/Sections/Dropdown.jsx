import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { makeStyles } from "@material-ui/core/styles";
// import { * } from '@material-ui/icons';

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

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

const useStyles = makeStyles(styles);

const codeDropdown = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Badge from 'components/Badge/Badge.js';

export default function Dropdown(){
  return (
    <div>
      <CustomDropdown
        buttonText="Regular"
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          {divider: true},
          "Separated link",
          {divider: true},
          "One more separated link",
        ]}
      />
    </div>
  );
}`;

const codeDropup = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

export default function Dropdup(){
  return (
    <CustomDropdown
      dropup
      dropdownHeader="Dropdown header"
      buttonText="Dropup"
      buttonProps={{
        round: true,
        color: "info"
      }}
      dropdownList={[
        "Action",
        "Another action",
        "Something else here",
        {divider: true},
        "Separated link",
        {divider: true},
        "One more separated link",
      ]}
    />
  );
}`;

const codeProps = `CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf(["primary", "black"]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.func,
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
};`;

export default function Dropdown() {
  const classes = useStyles();
  return (
    <div>
      <h1>Dropdown and Dropup</h1>
      <p>
        We've decided to create this component to make it easier for you to
        create a dropdown.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in
        <br />{" "}
        <code>
          src/assets/jss/material-kit-react/components/customDropdownStyle.js
        </code>
        .
      </p>
      <h2>Example Code - Dropdown</h2>
      <div className={classes.bdExample}>
        <CustomDropdown
          buttonText="Regular"
          dropdownList={[
            "Action",
            "Another action",
            "Something else here",
            { divider: true },
            "Separated link",
            { divider: true },
            "One more separated link"
          ]}
        />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeDropdown}
      </SyntaxHighlighter>
      <h2>Example Code - Dropup</h2>
      <div className={classes.bdExample}>
        <CustomDropdown
          dropup
          dropdownHeader="Dropdown header"
          buttonText="Dropup"
          buttonProps={{
            round: true,
            color: "info"
          }}
          dropdownList={[
            "Action",
            "Another action",
            "Something else here",
            { divider: true },
            "Separated link",
            { divider: true },
            "One more separated link"
          ]}
        />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeDropup}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}
