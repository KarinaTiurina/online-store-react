import React, { Component, Fragment } from 'react';
import productsContext from '~/context/ProductsContext';
import { withRouter, Redirect } from 'react-router-dom';
import Image from '~/src/components/views/Catalog/ProductCard/Image';
import Page404 from '~/src/components/views/Page404';

class Info extends Component {
  render() {
    const { match, location } = this.props;
    const product = this.context.find((product) => product.id == match.params.id);

    return (
      <div>
        { product ? (
              <Fragment>
                <h3>Продукт №{product.id}</h3>
                <p>
                  <strong>{product.title}</strong> - <i>${product.price}</i>
                </p>
                <Image {...product.image}
                  alt={product.title} />
              </Fragment>
          ) : (
            <Page404 />
          )
        }
      </div>
    );
  }
}

Info.contextType = productsContext;

export default withRouter(Info);
