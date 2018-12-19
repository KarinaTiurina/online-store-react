import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from '~/src/store';
import Basket from '~/src/components/containers/Basket';
import App from '~/App';

class AppRouter extends Component {
  render() {
     return (
      <Provider store={store}>
        <Basket>
          <Router>
            <App />
          </Router>
        </Basket>
      </Provider>
    );
  } 
} 

export default AppRouter;
