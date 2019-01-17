import React from 'react';
import { withFormik } from 'formik';
import request from 'superagent';

import apiBase from '~/constants/apiBase';
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
  console.log('handleSubmit');
  console.log(values);
  const { clearBasket } = values;
  delete values["clearBasket"];
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
  mapPropsToValues: ({ basketItems, clearBasket }) => ({
    basketItems: basketItems,
    clearBasket: clearBasket
  }),
  handleSubmit: (values) => handleSubmit(values),
  validate: (values) => validateForm(values)
})(OrderForm);

export default OrderFormContainer;