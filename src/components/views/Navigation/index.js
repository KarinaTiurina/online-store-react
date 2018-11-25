import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { mainPath, aboutPath, catalogPath, productPath, basketPath } from '~/src/helpers/routes';
import routes from '~/src/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const Navigation = () => (
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
);

export default Navigation;
