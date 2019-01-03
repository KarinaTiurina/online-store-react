import React from 'react';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={error ? 'fieldError' : ''}>
    <label htmlFor={name}>{label}</label>
    <input 
      input="text" 
      name={name}
      id={name}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Text;