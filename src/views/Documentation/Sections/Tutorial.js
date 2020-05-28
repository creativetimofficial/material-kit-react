/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
const files = `material-kit-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── bower.json
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   └── material-kit-react.css.map
    │   ├── img
    │   │   ├── examples
    │   │   └── faces
    │   ├── jss
    │   │   ├── material-kit-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── componentsSections
    │   │   │       ├── landingPageSections
    │   │   └── material-kit-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-react.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    └── views
        ├── Components
        │   ├── Components.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCarousel.js
        │       ├── SectionCompletedExamples.js
        │       ├── SectionDownload.js
        │       ├── SectionExamples.js
        │       ├── SectionJavascript.js
        │       ├── SectionLogin.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── ProductSection.js
        │       ├── TeamSection.js
        │       └── WorkSection.js
        ├── LoginPage
        │   └── LoginPage.js
        └── ProfilePage
            └── ProfilePage.js`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
        </p>
        <p>
          Copyright (c) {new Date().getFullYear()}{" "}
          <a
            href="https://creative-tim.com/?ref=mkr-tutorial-section-docs"
            target="_blank"
          >
            Creative Tim
          </a>
          .
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
        <p>
          <b>Material Kit React</b> is built on top of{" "}
          <a
            href="https://material-ui-next.com/?ref=creativetim"
            target="_blank"
          >
            Material UI
          </a>{" "}
          using{" "}
          <a
            href="https://github.com/facebook/create-react-app?ref=creativetim"
            target="_blank"
          >
            create-react-app
          </a>{" "}
          (at the moment we do not offer support for TypeScript in our React
          themes).
        </p>
        <p>
          Check the{" "}
          <a
            href="https://github.com/creativetimofficial/material-kit-react/blob/master/CHANGELOG.md?ref=creativetim"
            target="_blank"
          >
            CHANGELOG
          </a>{" "}
          to see what version we have used inside this product.
        </p>
        <p>
          You can convert our theme to TypeScript support by{" "}
          <a
            href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/14?ref=creativetim"
            target="_blank"
          >
            reading this thread
          </a>
          .
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/?ref=mkr-tutorial-section-docs"
              target="_blank"
            >
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-tutorial-section-docs"
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
          </li>
          <li>
            Alternatively you can run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will delete <code>node_modules</code>,{" "}
            <code>package-lock.json</code>, automatically run{" "}
            <code>install</code> script and <code>start</code> script
          </li>
          <li>
            <div>
              If you have an error something containing
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`Module not found`}</SyntaxHighlighter>
              You should check if in your root project folder you have a file
              named <code>.env</code>.
              <br />
              If you do not have it, then create it and add this line in it:{" "}
              <code>NODE_PATH=./src</code>
              <br />
              If that does not work, you need to do the following
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`npm install --g cross-env`}</SyntaxHighlighter>
              then change the <code>script</code> inside{" "}
              <code>package.json</code> by adding <code>NODE_PATH=./src</code>{" "}
              inside it. For example, the start script would be changed from
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "react-scripts start",`}</SyntaxHighlighter>
              to
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            </div>
          </li>
          <li>
            <div>
              <p>
                If you have an error about{" "}
                <code>props.history is undefined</code>, than you're probably
                not sending inside the <code>Header</code> component the props
                that come from the routes (everywhere <code>Header</code> is
                rendered - we pass the <code>{`{...rest}`}</code> to it).
              </p>
              <p>
                You can also read more about{" "}
                <a
                  href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70?ref=creativetim"
                  target="_blank"
                >
                  this issue here
                </a>
                .
              </p>
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
                  href="https://github.com/facebookincubator/create-react-app?ref=creativetim"
                  target="_blank"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to <code>http://localhost:3000</code>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html?ref=creativetim"
              target="_blank"
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
