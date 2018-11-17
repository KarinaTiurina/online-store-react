import React, { Component, Fragment } from 'react';
import basketContext from '~/context/basket_context';

class AddToBasket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const appState = this.context;

    appState.addToBasket(this.props, this.state.count);
  }

  setCount(e) {
    this.setState({
      count: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <Fragment>
        <input type="number"
               value={this.state.count}
               onChange={(e) => this.setCount(e)} />
        <button onClick={this.handleClick}>Добавить в козину</button>
      </Fragment>
    );
  }
}

AddToBasket.contextType = basketContext;

export default AddToBasket;
