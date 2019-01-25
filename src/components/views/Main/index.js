import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { catalogPath } from 'helpers/routes';
import Helmet from 'react-helmet';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Онлайн-магазин</title>
          <meta name="description" content="Главная страница" />
          <link rel="shortcut icon" href="https://cdn1.iconfinder.com/data/icons/e-commerce-set-1-1/256/Online_Shop-512.png" />
          <meta name="keywords" content="Онлайн-магазин Online Store" />
        </Helmet>
        <h3>Добро пожаловать в онлайн-магазин!</h3>
        <p>Перейти к <Link to={catalogPath()}>каталогу</Link>.</p>
      </div>
    );
  }
}

export default Main;
