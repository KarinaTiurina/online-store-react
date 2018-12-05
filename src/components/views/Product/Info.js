import React, { Component, Fragment } from 'react';
import Page404 from '~/src/components/views/Page404';
import Gallery from './Gallery';

class Info extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        { product ? (
            <Fragment>
              <h3>Продукт №{product.id}</h3>
              <p>
                <strong>{product.title}</strong> - <i>${product.price}</i>
              </p>
              <Gallery images={product.images} />
            </Fragment>
          ) : (
            <Page404 />
          )
        }
      </div>
    );
  }
}

export default Info;
