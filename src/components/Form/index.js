import React from 'react';
import PropTypes from 'prop-types';
import { BsPlusCircle } from 'react-icons/bs';

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <div className="box">
        <input onChange={handleChange} type="text" value={novaTarefa} />
        <button type="submit" className="button">
          <BsPlusCircle />
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
