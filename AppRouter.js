import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from '~/src/store';
import Basket from '~/src/components/containers/Basket';
import App from '~/App';
import DevTools from '~/src/containers/DevTools';

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

// ReactDOM.render(
//   <DevTools store={store} />,
//   document.getElementById('devtools')
// );

export default AppRouter;
