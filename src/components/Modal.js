import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './Modal.css';

ReactModal.setAppElement('#root');

function Modal(props) {
  console.log(props.todo);
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="Container">
      <ReactModal
        isOpen={props.isModalOpen}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        closeModal={props.closeModal}
      >
        <h1>{props.todo?.name}</h1>
        <p>Editing</p>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          value={inputValue}
        />

        <button onClick={props.closeModal} className="cancel">
          cancel
        </button>
        <div>
          <button
            onClick={() => {
              props.handleEditTodo({ ...props.todo, name: inputValue });
              setInputValue;
            }}
            className="Edit"
          >
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
  todo: PropTypes.object,
};

export default Modal;
