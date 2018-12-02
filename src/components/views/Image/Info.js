import React, { Component, Fragment } from 'react';
import Image from '~/src/components/views/Catalog/ProductCard/Image';
import Page404 from '~/src/components/views/Page404';

class Info extends Component {
  render() {
    const { image } = this.props;

    return (
      <div>
        { image ? (
            <Image {...image}
              width='200px' />
          ) : (
            <Page404 />
          )
        }
      </div>
    );
  }
}

export default Info;
