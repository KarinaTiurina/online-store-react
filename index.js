import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import browserContext from './browserContext';
import bowser from 'bowser';
import CatalogPage from '~/src/CatalogPage';
import products from '~/constants/products'

const getBrowser = () => (
  bowser.getParser(window.navigator.userAgent)
);

console.log(getBrowser().getPlatform().type);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { products };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <CatalogPage products={products} />
      </div>
    );
  }
}

ReactDOM.render(
  <browserContext.Provider value={getBrowser()}>
    <App />
  </browserContext.Provider>,
  document.getElementById('root')
);
