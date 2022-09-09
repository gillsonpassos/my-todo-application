import React from 'react';
import PropTypes from 'prop-types';
import { BsPlusCircle } from 'react-icons/bs';

import formStyle from './Form.module.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className={formStyle.form}>
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit" className={formStyle.button}>
        <BsPlusCircle />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
