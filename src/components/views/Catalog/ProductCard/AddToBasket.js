import React, { Component, Fragment } from 'react';

class AddToBasket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.addToBasket({...this.props.product, count: this.state.count});
    this.props.updateBasketCount(this.state.count);
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

export default AddToBasket;
