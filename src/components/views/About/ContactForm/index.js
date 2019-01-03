import React from  'react';
import { set, assign } from 'lodash/object';
import Text from './Text';
import TextArea from './TextArea';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {
          fullName: false,
          email: false
        }
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false      
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      switch(fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
        break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', fieldName],
        e.target.value
      ))
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <h1>Напишите нам</h1>
        <form onSubmit={this.onSubmit}>
          <Text 
            name="fullName"
            label="Ваше имя:"
            value={fullName}
            error={this.state.form.errors.fullName}
            onChange={this.handleChange('fullName')}
          />
          <Text 
            name="email"
            label="Ваш email:"
            value={email}
            error={this.state.form.errors.email}
            onChange={this.handleChange('email')}
          />
          <TextArea 
            name="message"
            label="Ваше сообщение:"
            value={message}
            onChange={this.handleChange('message')}
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default ContactForm;