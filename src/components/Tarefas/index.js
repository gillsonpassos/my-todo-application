/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit2, FiTrash } from 'react-icons/fi';

import taskStyle from './Tarefas.module.css';

export default function Tarefas({
  tarefas,
  handleEdit,
  handleDelete,
  handleTogleIsCompleted,
}) {
  return (
    <ul className={taskStyle.tarefas}>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa.id}>
          <div>
            <input
              type="checkbox"
              className={taskStyle.teste}
              checked={tarefa.isCompleted}
              onChange={() => handleTogleIsCompleted(tarefa.id)}
            />
            <p> {tarefa.name}</p>
          </div>
          <span>
            <FiEdit2
              className={taskStyle.edit}
              onClick={() => handleEdit(tarefa)}
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
  handleTogleIsCompleted: PropTypes.func.isRequired,
};
