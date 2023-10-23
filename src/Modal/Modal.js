import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button
          style={{ marginBottom: "1rem" }}
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Some modal window</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nobis cum adipisci laborum repellat!
              </p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
