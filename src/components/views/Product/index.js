import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import request from 'superagent';
import apiBase from '~/constants/apiBase.js';
import Info from './Info';

class Product extends Component {
  constructor(props) {
    super(props); 

    this.state = { product: null, isLoading: true }
  }

  componentDidMount() {
    console.log('componentDidMount product');
    console.log(this.props);
  }

  render() {
    const { product, isLoading } = this.state;

    return (
      <Fragment>
        { !isLoading &&
            <Info product={product} />
        }
      </Fragment>
    );
  }
}

export default withRouter(Product);
