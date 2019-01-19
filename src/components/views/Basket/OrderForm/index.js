import React, { Fragment, Component } from 'react';
import { withFormik, Form, Field } from 'formik';

import TextField from './Text';
import orderFormFields from './orderFormFields';

class OrderForm extends Component {
  render() {
    const { errors } = this.props;
    return (
      <Form>
        {
          orderFormFields.map((field) => (
            <Fragment>
              <TextField 
                name={field.name}
                label={field.label}
                errors={errors[field.name]}
              />
              <br />
            </Fragment>
          ))
        }
        <button type='submit'>Заказать</button>
      </Form>
    );
  }
};

export default OrderForm;