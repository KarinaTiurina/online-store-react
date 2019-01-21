import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'stylesheets/index.css';
import store from 'store';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
); 
