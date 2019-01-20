import React from 'react';
import { Field } from 'formik';

const Text = ({ name, label, errors }) => (
  <div>
    <label htmlFor={name}>{label}</label><br />
    <Field type='text' name={name} />
    {
      errors &&
      <span style={{ color: 'red' }}>{errors}</span>
    }
  </div>
);

export default Text;

