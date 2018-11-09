import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductCard from '~/src/ProductCard';
import defaultImageUrl from '~/constants/defaultImageUrl.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ProductCard src={defaultImageUrl}
          alt='image test'
          width='50px'
          height='50'
          text='test'
          price='10.5' />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
