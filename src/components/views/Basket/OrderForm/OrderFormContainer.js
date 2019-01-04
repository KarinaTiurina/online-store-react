import React from 'react';
import { withFormik } from 'formik';

import orderFormFields from '~/constants/orderFormFields';
import OrderForm from '~/src/components/views/Basket/OrderForm';

const validateForm = (values) => {
  const errors = {};

  orderFormFields.map((field) => {
    if (field.required && !values[field.name])
      errors[field.name] = 'Обязательное поле';

    if (field.format) {
      if (!field.format.test(values[field.name])) {
        errors[field.name] = 'Некорректные данные';
      }
    }
  });

  return errors;
}

const handleSubmit = (values) => {
  alert(JSON.stringify(values));
}

const OrderFormContainer = withFormik({
  mapPropsToValues: ({ basketItems }) => ({
    basketItems: basketItems
  }),
  handleSubmit: (values) => handleSubmit(values),
  validate: (values) => validateForm(values)
})(OrderForm);

export default OrderFormContainer;