import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit2, FiTrash } from 'react-icons/fi';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          <div>
            <input type="checkbox" className="teste" />
            <p> {tarefa}</p>
          </div>
          <span>
            <FiEdit2 className="edit" onClick={(e) => handleEdit(e, index)} />

            <div>
              <FiTrash
                onClick={(e) => handleDelete(e, index)}
                className="delete"
              />
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};