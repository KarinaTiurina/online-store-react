import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from '~/src/store';
import App from '~/App';

class AppRouter extends Component {
  render() {
     return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  } 
} 

export default AppRouter;
