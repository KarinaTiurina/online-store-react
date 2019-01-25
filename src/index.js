import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'stylesheets/index.css';
import createStore from 'store';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }
); 
