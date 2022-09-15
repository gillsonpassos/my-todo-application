import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './Modal.css';

ReactModal.setAppElement('#root');

function Modal(props) {
  return (
    <div className="Container">
      <ReactModal
        isOpen={props.isModalOpen}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        closeModal={props.closeModal}
        handleEditTodo={props.handleEditTodo}
      >
        <p>Editing</p>
        <h1>Finish to developrer things</h1>
        <input className="text"></input>

        <button onClick={props.closeModal} className="cancel">
          cancel
        </button>
        <div>
          <button onClick={props.handleEditTodo} className="Edit">
            update
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};

export default Modal;
