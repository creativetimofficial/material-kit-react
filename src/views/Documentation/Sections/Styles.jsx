/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const restyledComponents = `├── components
   ├── Badge
   │   └── Badge.js
   ├── Card
   │   ├── Card.js
   │   ├── CardBody.js
   │   ├── CardFooter.js
   │   └── CardHeader.js
   ├── Clearfix
   │   └── Clearfix.js
   ├── CustomButtons
   │   └── Button.js
   ├── CustomDropdown
   │   └── CustomDropdown.js
   ├── CustomInput
   │   └── CustomInput.js
   ├── CustomLinearProgress
   │   └── CustomLinearProgress.js
   ├── CustomTabs
   │   └── CustomTabs.js
   ├── Footer
   │   └── Footer.js
   ├── Grid
   │   ├── GridContainer.js
   │   └── GridItem.js
   ├── Header
   │   ├── Header.js
   │   └── HeaderLinks.js
   ├── InfoArea
   │   └── InfoArea.js
   ├── NavPills
   │   └── NavPills.js
   ├── Pagination
   │   └── Pagination.js
   ├── Parallax
   │   └── Parallax.js
   ├── Snackbar
   │   └── SnackbarContent.js
   └── Typography
       ├── Danger.js
       ├── Info.js
       ├── Muted.js
       ├── Primary.js
       ├── Quote.js
       ├── Small.js
       ├── Success.js
       └── Warning.js`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Styles</h1>
        <p>
          Like our friends from{" "}
          <a
            href="https://material-ui-next.com/?ref=creativetim"
            target="_blank"
          >
            Material UI
          </a>
          , we've used JSS syntax to style (restyle) the material ui components.
        </p>
        <p>
          A useful link about JSS is{" "}
          <a href="https://github.com/cssinjs?ref=creativetim" target="_blank">
            this one here
          </a>
          .
        </p>
        <p>
          We've decided to use the <code>makeStyles</code> function from
          Material-UI to override some of thier styles. This is a React HOOK
          functions, which means that it can only be called from another React
          HOOK or a simple function. Read more about it{" "}
          <a
            href="https://material-ui.com/styles/api/#makestyles-styles-options-hook"
            target="_blank"
          >
            here
          </a>
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
          beginning of the file we import <code>makeStyles</code> from{" "}
          <code>material-ui</code>, then we import from{" "}
          <code>scr/assets/jss/*</code> the correspondig style for that
          component and after these imports, we use the <code>makeStyles</code>{" "}
          function alongside our styles to compile them to jss from javascript
          objects.
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
