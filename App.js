import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '~/src/components/views/Navigation';
import Basket from '~/src/components/containers/Basket';
import products from '~/constants/products';
import routes from '~/src/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  render() {
    return (
      <Basket>
        <Router>
          <div>
            <Navigation />
            <Switch>
              {routes.map((route, i) => RouteWithSubroutes(route, i))}
            </Switch>
          </div>
        </Router>
      </Basket>
    );
  }
}

export default App;
