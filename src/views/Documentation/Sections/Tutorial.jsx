import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { atomOneDark } from "react-syntax-highlighter/styles/hljs";
/* eslint-disable */
const files = `material-kit-react
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes
    │   └── index.jsx
    ├── assets
    │   ├── img
    │   │   └── kit
    │   │       ├── faces
    │   │       └── free
    │   │           └── examples
    │   ├── jss
    │   │   ├── material-kit-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── componentsSections
    │   │   │       └── landingPageSections
    │   │   └── material-kit-react.jsx
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-react.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   └── CardHeader.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   ├── Button.jsx
    │   │   └── IconButton.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── GridItem.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Snackbar
    │   │   └── SnackbarContent.jsx
    │   └── Typography
    │       ├── Danger.jsx
    │       ├── Info.jsx
    │       ├── Muted.jsx
    │       ├── Primary.jsx
    │       ├── Quote.jsx
    │       ├── Small.jsx
    │       ├── Success.jsx
    │       └── Warning.jsx
    └── views
        ├── Components
        │   ├── Components.jsx
        │   └── Sections
        │       ├── SectionBasics.jsx
        │       ├── SectionCarousel.jsx
        │       ├── SectionCompletedExamples.jsx
        │       ├── SectionDownload.jsx
        │       ├── SectionExamples.jsx
        │       ├── SectionJavascript.jsx
        │       ├── SectionNavbars.jsx
        │       ├── SectionNotifications.jsx
        │       ├── SectionPills.jsx
        │       ├── SectionSignup.jsx
        │       ├── SectionTabs.jsx
        │       └── SectionTypography.jsx
        ├── LandingPage
        │   ├── LandingPage.jsx
        │   └── Sections
        │       ├── ProductSection.jsx
        │       ├── TeamSection.jsx
        │       └── WorkSection.jsx
        ├── ProfilePage
        │   └── ProfilePage.jsx
        └── SignupPage
            └── SignupPage.jsx`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
        </p>
        {
          // eslint-disable-next-line
        }
        <p>
          Copyright (c) 2018<a href="https://creative-tim.com/" target="_blank">
            Creative Tim
          </a>.
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h2>Getting started</h2>
        {
          // eslint-disable-next-line
        }
        <p>
          <b>Material Kit React</b> is built on top of{" "}
          <a href="https://material-ui-next.com/" target="_blank">
            Material UI
          </a>.
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          {
            // eslint-disable-next-line
          }
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/" target="_blank">
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          {
            // eslint-disable-next-line
          }
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/product/material-kit-react"
              target="_blank"
            >
              material kit react
            </a>{" "}
            and press the download button (this will download onto your computer
            a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
            <div>
              If you have an error something containing
              <SyntaxHighlighter
                language="jsx"
                style={atomOneDark}
              >{`Module not found`}</SyntaxHighlighter>
            </div>
            <div>
              Try
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`npm install --g corss-env`}</SyntaxHighlighter>
              and then try again starting the app.
            </div>
            <div>
              If this doesn't do the trick, than also change the{" "}
              <code>start script</code> inside <code>package.json</code> from
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "npm-run-all -p watch-css start-js",`}</SyntaxHighlighter>
              to
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "NODE_PATH=./src npm-run-all -p watch-css start-js",`}</SyntaxHighlighter>
            </div>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to <code>your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <code>http://localhost:3000</code>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <h2>Files and Folders structure</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {files}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
