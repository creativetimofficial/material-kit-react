/*eslint-disable*/
import React from "react";

export default function BuildTools() {
  return (
    <>
      <h1 className="bd-title" id="content">
        Build tools
      </h1>
      <p className="bd-lead">
        Learn how to use Black Dashboard Pro React to build your admin theme,
        compile SCSS, change brand-colors and more.
      </p>
      <h3 id="change-brand-colors">
        <div>Change brand colors</div>
      </h3>
      <ul>
        <li>
          You will find all the branding colors inside{" "}
          <code className="highlighter-rouge">
            src/assets/scss/black-dashboard-pro-react/custom/_variables.scss
          </code>
          .
        </li>
      </ul>
      <h3 id="compile-scss">
        <div>Available commands</div>
      </h3>
      <div className="bd-example">
        <table>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Usage</th>
              <th className="text-left">Description</th>
              <th className="text-right">Read more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>
                <code className="highlighter-rouge">install</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm install</code>
              </td>
              <td className="text-left">
                This command installs a package, and any packages that it
                depends on.
              </td>
              <td className="text-right">
                <a
                  href="https://docs.npmjs.com/cli/install?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>
                <code className="highlighter-rouge">start</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm start</code>
              </td>
              <td className="text-left">
                This will determinate the start of your development server.
              </td>
              <td className="text-right">
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-start?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>
                <code className="highlighter-rouge">build</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run build</code>
              </td>
              <td className="text-left">
                This will create a build directory with a production build of
                your app.
              </td>
              <td className="text-right">
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-build?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td>
                <code className="highlighter-rouge">test</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run test</code>
              </td>
              <td className="text-left">
                Runs the test watcher in an interactive mode. (Note that we have
                not implemented any tests - this command is by default from the
                create-react-app)
              </td>
              <td className="text-right">
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-test?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">5</td>
              <td>
                <code className="highlighter-rouge">eject</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run eject</code>
              </td>
              <td className="text-left">
                This command will remove the single build dependency from your
                project. (We do not recommend using this command. Our product
                may not work after using this command.)
              </td>
              <td className="text-right">
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">6</td>
              <td>
                <code className="highlighter-rouge">install:clean</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run install:clean</code>
              </td>
              <td className="text-left">
                This command will remove the{" "}
                <code className="highlighter-rouge">node_modules</code> folder
                and <code className="highlighter-rouge">package_lock.json</code>{" "}
                file, and will install a fresh copy of them.
              </td>
              <td className="text-right" />
            </tr>
            <tr>
              <td className="text-center">7</td>
              <td>
                <code className="highlighter-rouge">compile-sass</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run compile-sass</code>
              </td>
              <td className="text-left">
                This command will compile the scss files located inside{" "}
                <code className="highlighter-rouge">src/assets/scss/*</code>{" "}
                into{" "}
                <code className="highlighter-rouge">
                  src/assets/css/black-dashboard-pro-react.css
                </code>
                .
              </td>
              <td className="text-right" />
            </tr>
            <tr>
              <td className="text-center">8</td>
              <td>
                <code className="highlighter-rouge">minify-sass</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run minify-sass</code>
              </td>
              <td className="text-left">
                This command will compile and minify the scss files located
                inside{" "}
                <code className="highlighter-rouge">src/assets/scss/*</code>{" "}
                into{" "}
                <code className="highlighter-rouge">
                  src/assets/css/black-dashboard-pro-react.min.css
                </code>
                .
              </td>
              <td className="text-right" />
            </tr>
            <tr>
              <td className="text-center">9</td>
              <td>
                <code className="highlighter-rouge">map-sass</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run map-sass</code>
              </td>
              <td className="text-left">
                This command will compile and map the scss files located inside{" "}
                <code className="highlighter-rouge">src/assets/scss/*</code>{" "}
                into{" "}
                <code className="highlighter-rouge">
                  src/assets/css/black-dashboard-pro-react.css.map
                </code>
                .
              </td>
              <td className="text-right" />
            </tr>
            <tr>
              <td className="text-center">10</td>
              <td>
                <code className="highlighter-rouge">build-package-css</code>
              </td>
              <td>
                <code className="highlighter-rouge">
                  npm run build-package-css
                </code>
              </td>
              <td className="text-left">
                This will copy the compiled version of the scss file from the
                assets folder in the dist folder in order for you to publish the
                dist folder to npm
              </td>
              <td className="text-right" />
            </tr>
            <tr>
              <td className="text-center">11</td>
              <td>
                <code className="highlighter-rouge">build-package</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run build-package</code>
              </td>
              <td className="text-left">
                This will prepare the product for npm distribution (Caution -
                the product was not thought as a npm distribution)
              </td>
              <td className="text-right" />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
