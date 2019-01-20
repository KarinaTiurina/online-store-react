import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainPath, aboutPath, catalogPath, productPath, basketPath } from 'helpers/routes';

const Navigation = () => (
  <ul>
    <li><NavLink exact to={mainPath()}>Главная страница</NavLink></li>
    <li><NavLink to={aboutPath()}>Контакты</NavLink></li>
    <li><NavLink to={catalogPath()}>Каталог</NavLink></li>
    <li><NavLink to={basketPath()}>Корзина</NavLink></li>
  </ul>
);

export default Navigation;
