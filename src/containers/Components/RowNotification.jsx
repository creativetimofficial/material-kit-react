import React, { Component } from 'react';
import { Grid, Alert } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Alert
  bsStyle="info"
  onDismiss={() => {}}
>
  <Grid fluid>
    <div className="alert-icon">
      <i className="material-icons">info_outline</i>
    </div>
    <strong>Info alert:</strong> You've got some friends nearby, stop looking at your phone and find them...
  </Grid>
</Alert>`;

class RowNotification extends Component {
  render() {
    return (
      <div className="tim-row" id="notification-row">
        <h2> Notifications </h2>
        <legend />
        <p>
          The new notifications are looking fresh and clean. They go great with
          the navbar.
        </p>

        <Alert bsStyle="info" onDismiss={() => {}}>
          <Grid fluid>
            <div className="alert-icon">
              <i className="material-icons">info_outline</i>
            </div>
            <strong>Info alert:</strong> You've got some friends nearby, stop
            looking at your phone and find them...
          </Grid>
        </Alert>

        <Alert bsStyle="success" onDismiss={() => {}}>
          <Grid fluid>
            <div className="alert-icon">
              <i className="material-icons">check</i>
            </div>
            <strong>Success Alert:</strong> Yuhuuu! You've got your $11.99 album
            from The Weeknd
          </Grid>
        </Alert>

        <Alert bsStyle="warning" onDismiss={() => {}}>
          <Grid fluid>
            <div className="alert-icon">
              <i className="material-icons">warning</i>
            </div>
            <strong>Warning Alert:</strong> Hey, it looks like you still have
            the "copyright &copy; 2015" in your footer. Please update it!
          </Grid>
        </Alert>

        <Alert bsStyle="danger" onDismiss={() => {}}>
          <Grid fluid>
            <div className="alert-icon">
              <i className="material-icons">error_outline</i>
            </div>
            <strong>Error Alert:</strong> Damn man! You screwed up the server
            this time. You should find a good excuse for your Boss...
          </Grid>
        </Alert>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#alert-props"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default RowNotification;
