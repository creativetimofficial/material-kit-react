import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class RoutingSystem extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing System</h1>
        <p>
          For a better and easier way we've decided to create dynamic routes.
          You will find all our demo routes in:
        </p>
        <ul>
          <li>
            <code>src/routes/index.jsx</code>{" "}
          </li>
        </ul>
        <p>
          Here we have all the routes to all of our pages - 4 pages (which can
          be found in <code>src/views/PageName/PageName.jsx</code>).
        </p>
        <p>
          Feel free to create any new page component, import it here (<code>
            src/routes/index.jsx
          </code>), and then add a new route like it is shown in our legend (see
          bellow).
        </p>
        <h2>Legend</h2>
        <ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{ path: "/path/name", name: "Name Of Route", component: YourComponent },`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>path</code> (path for your route - this will be seen in the
              browser url input)
            </li>
            <li>
              <code>name</code> (name of your route)
            </li>
            <li>
              <code>component</code> (this is the page/component to be rendered)
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default RoutingSystem;
