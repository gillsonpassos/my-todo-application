import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit2, FiTrash } from 'react-icons/fi';

import taskStyle from './Tarefas.module.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className={taskStyle.tarefas}>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          <div>
            <input type="checkbox" className={taskStyle.teste} />
            <p> {tarefa}</p>
          </div>
          <span>
            <FiEdit2
              className={taskStyle.edit}
              onClick={(e) => handleEdit(e, index)}
            />

            <div>
              <FiTrash
                onClick={(e) => handleDelete(e, index)}
                className={taskStyle.delete}
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
