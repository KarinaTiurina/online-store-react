import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import request from 'superagent';
import apiBase from '~/constants/apiBase.js';
import Info from './Info';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.item;
    const { isFetching } = this.props;

    return (
      <Fragment>
        { !isFetching &&
            <Info product={product} />
        }
      </Fragment>
    );
  }
}

export default withRouter(Product);
