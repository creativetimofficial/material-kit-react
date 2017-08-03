import React, { Component } from 'react';
import { Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Table responsive>
  <thead>
    <tr>
      <th className="text-center">#</th>
      <th>Name</th>
      <th>Job Position</th>
      <th>Since</th>
      <th className="text-right">Salary</th>
      <th className="text-right">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-center">1</td>
      <td>Andrew Mike</td>
      <td>Develop</td>
      <td>2013</td>
      <td className="text-right">&euro; 99,225</td>
      <td className="td-actions text-right">
        <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
          <Button bsStyle="info" bsSize="xs" justIcon link>
            <i className="fa fa-user"></i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit Profile</Tooltip>}>
          <Button bsStyle="success" bsSize="xs" justIcon link>
            <i className="fa fa-edit"></i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Remove</Tooltip>}>
          <Button bsStyle="danger" bsSize="xs" justIcon link>
            <i className="fa fa-times"></i>
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  </tbody>
</Table>`;

class RowTables extends Component {
  render() {
    return (
      <div className="tim-row" id="tables-row">
        <h2>Tables</h2>
        <legend />
        <p>All Boostrap classes for tables are supported and improved.</p>

        <h4>Simple Table with Actions</h4>
        <Table responsive>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Job Position</th>
              <th>Since</th>
              <th className="text-right">Salary</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>Andrew Mike</td>
              <td>Develop</td>
              <td>2013</td>
              <td className="text-right">&euro; 99,225</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>View Profile</Tooltip>}
                >
                  <Button bsStyle="info" bsSize="xs" justIcon link>
                    <i className="fa fa-user" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit Profile</Tooltip>}
                >
                  <Button bsStyle="success" bsSize="xs" justIcon link>
                    <i className="fa fa-edit" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Remove</Tooltip>}
                >
                  <Button bsStyle="danger" bsSize="xs" justIcon link>
                    <i className="fa fa-times" />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>John Doe</td>
              <td>Design</td>
              <td>2012</td>
              <td className="text-right">&euro; 89,241</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>View Profile</Tooltip>}
                >
                  <Button bsStyle="info" bsSize="xs" justIcon link>
                    <i className="fa fa-user" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit Profile</Tooltip>}
                >
                  <Button bsStyle="success" bsSize="xs" justIcon link>
                    <i className="fa fa-edit" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Remove</Tooltip>}
                >
                  <Button bsStyle="danger" bsSize="xs" justIcon link>
                    <i className="fa fa-times" />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>Alex Mike</td>
              <td>Design</td>
              <td>2010</td>
              <td className="text-right">&euro; 92,144</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>View Profile</Tooltip>}
                >
                  <Button bsStyle="info" bsSize="xs" justIcon link>
                    <i className="fa fa-user" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit Profile</Tooltip>}
                >
                  <Button bsStyle="success" bsSize="xs" justIcon link>
                    <i className="fa fa-edit" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Remove</Tooltip>}
                >
                  <Button bsStyle="danger" bsSize="xs" justIcon link>
                    <i className="fa fa-times" />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#table-props"
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

export default RowTables;
