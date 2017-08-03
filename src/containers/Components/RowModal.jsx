import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeSnippet = `<Button bsStyle="primary" onClick={this.handleModal}>Launch demo modal</Button>

<Modal show={this.state.showModal} onHide={this.handleModal}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Far far away, ...</p>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={this.handleModal} bsStyle="default" link>Close</Button>
    <Button bsStyle="info" link>Save</Button>
  </Modal.Footer>
</Modal>`;

class RowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      };
    });
  };

  render() {
    return (
      <div className="tim-row" id="modal-row">
        <h2>Modals</h2>
        <legend />
        <p>
          We restyled the classic Bootstrap Modal and gave it a more simple
          look.
        </p>
        <Button bsStyle="primary" onClick={this.handleModal}>
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModal} bsStyle="default" link>
              Close
            </Button>
            <Button bsStyle="info" link>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Please reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#modals-props-modal"
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

export default RowModal;
