import React from 'react';
import { withFormik } from 'formik';
import request from 'superagent';

import apiBase from '~/constants/apiBase';
import orderFormFields from './orderFormFields';
import OrderForm from '~/src/components/views/Basket/OrderForm';

const validateForm = (values) => {
  const errors = {};

  orderFormFields.map((field) => {
    if (field.required && !values[field.name])
      errors[field.name] = 'Обязательное поле';

    if (field.format && values[field.name]) {
      if (!field.format.test(values[field.name])) {
        errors[field.name] = 'Некорректные данные';
      }
    }
  });

  return errors;
}

const handleSubmit = (values, formikBag) => {
  const { clearBasket } = formikBag.props;
  request
    .post(`${apiBase}/orders`)
    .send(values)
    .end((err, response) => {
      if (err)
        alert("Ошибка. Проверьте правильность введенных данных");
      else {
        clearBasket();
        alert('Спасибо за заказ!');
      }
    });
}

const OrderFormContainer = withFormik({
  mapPropsToValues: ({ basketItems }) => ({
    basketItems: basketItems
  }),
  handleSubmit: (values, formikBag) => handleSubmit(values, formikBag),
  validate: (values) => validateForm(values)
})(OrderForm);

export default OrderFormContainer;