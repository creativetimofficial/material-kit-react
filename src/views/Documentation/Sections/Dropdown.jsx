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
import withStyles from "@material-ui/core/styles/withStyles";
// import { * } from '@material-ui/icons';

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

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

const codeDropdown = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Badge from 'components/Badge/Badge.jsx';

function Dropdown({...props}){
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
}

export default Dropdown;
`;

const codeDropup = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

function Dropdup({...props}){
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
}

export default Dropdup;
`;

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

function Dropdown({ ...props }) {
  const { classes } = props;
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
          src/assets/jss/material-kit-react/components/customDropdownStyle.jsx
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

export default withStyles(styles)(Dropdown);
