import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Basket from '~/src/components/containers/Basket';
import App from '~/App';

class AppRouter extends Component {
  render() {
     return (
      <Basket>
        <Router>
          <App />
        </Router>
      </Basket>
    );
  }
}

export default AppRouter;
