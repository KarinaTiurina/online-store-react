import React, { Component } from 'react';
import basketContext from '~/context/BasketContext';
import productsContext from '~/context/ProductsContext';
import products from '~/constants/products';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { mainPath, aboutPath, catalogPath, productPath, basketPath } from '~/src/helpers/routes';
import routes from '~/src/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  constructor(props) {
    super(props);

    const basketItems = [];

    this.addToBasket = (data) => {
      const basketItems = [...this.state.basketItems, data];
      this.setState({basketItems});
    };

    this.state = { basketItems, addToBasket: this.addToBasket };
  }

  render() {
    return (
      <basketContext.Provider value={this.state}>
        <productsContext.Provider value={products}>
          <Router>
            <div>
              <ul>
                <li><NavLink exact to={mainPath()}>Главная страница</NavLink></li>
                <li><NavLink to={aboutPath()}>Контакты</NavLink></li>
                <li><NavLink to={catalogPath()}>Каталог</NavLink></li>
                <li><NavLink to={basketPath()}>Корзина</NavLink></li>
              </ul>
              <Switch>
                {routes.map((route, i) => RouteWithSubroutes(route, i))}
              </Switch>
            </div>
          </Router>
        </productsContext.Provider>
      </basketContext.Provider>
    );
  }
}

export default App;
