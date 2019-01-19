const orderFormFields = [
  {
    name: 'fullName',
    label: 'ФИО:',
    required: true
  },
  {
    name: 'phone',
    label: 'Номер телефона:',
    format: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
  },
  {
    name: 'email',
    label: 'Email:',
    required: true,
    format: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  {
    name: 'address',
    label: 'Адрес доставки:',
    required: true
  }
];

export default orderFormFields;