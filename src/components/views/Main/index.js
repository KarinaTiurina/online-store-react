import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { catalogPath } from '~/src/helpers/routes';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Добро пожаловать в онлайн-магазин!</h3>
        <p>Перейти к <Link to={catalogPath()}>каталогу</Link>.</p>
      </div>
    );
  }
}

export default Main;
