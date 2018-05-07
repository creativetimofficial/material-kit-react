import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const restyledComponents = `components
├── Badge
│   └── Badge.jsx
├── Card
│   ├── Card.jsx
│   ├── CardBody.jsx
│   ├── CardFooter.jsx
│   └── CardHeader.jsx
├── Clearfix
│   └── Clearfix.jsx
├── CustomButtons
│   ├── Button.jsx
│   └── IconButton.jsx
├── CustomDropdown
│   └── CustomDropdown.jsx
├── CustomInput
│   └── CustomInput.jsx
├── CustomLinearProgress
│   └── CustomLinearProgress.jsx
├── CustomTabs
│   └── CustomTabs.jsx
├── Footer
│   └── Footer.jsx
├── Grid
│   ├── GridContainer.jsx
│   └── GridItem.jsx
├── Header
│   ├── Header.jsx
│   └── HeaderLinks.jsx
├── InfoArea
│   └── InfoArea.jsx
├── NavPills
│   └── NavPills.jsx
├── Pagination
│   └── Pagination.jsx
├── Snackbar
│   └── SnackbarContent.jsx
└── Typography
    ├── Danger.jsx
    ├── Info.jsx
    ├── Muted.jsx
    ├── Primary.jsx
    ├── Quote.jsx
    ├── Small.jsx
    ├── Success.jsx
    └── Warning.jsx`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Styles</h1>
        <p>
          Like our friends from{" "}
          <a
            href="https://material-ui-next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material UI
          </a>, we've used JSS syntax to style (restyle) the material ui
          components.
        </p>
        <p>
          A useful link about JSS is{" "}
          <a
            href="http://cssinjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>.
        </p>
        <p>
          Material UI offers you 7 ways to override their styles, and as said
          above, we've decided to go with the third option (<a
            href="https://material-ui-next.com/guides/interoperability/#react-jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>).
        </p>
        <p>
          All of the restyled components can be found in{" "}
          <code>src/components</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {restyledComponents}
        </SyntaxHighlighter>
        <p>
          If you go to any of our components you will see that somewhere at the
          beginning of the file we import <code>withStyles</code> from{" "}
          <code>material-ui</code>, then we import from{" "}
          <code>scr/assets/jss/material-kit-react.jsx</code> the correspondig
          style for that component and at the end of the file, we export that
          component's class with the <code>withStyles</code> function so that
          the imported style overrides the <code>material-ui</code> style.
        </p>
        <p>
          For a better way of understanding this variables, please take a look
          inside the <code>src/assets/jss/material-dashboard-react</code>. You
          will see that all of the styles have a unique name that corresponds
          with the component name. You will also see that we've used some of
          that styles for <code>src/views/*</code> as well.
        </p>
      </div>
    );
  }
}

export default Styles;
