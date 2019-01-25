import React from 'react';
import Helmet from 'react-helmet';

export default {
  render: ({staticContext}) => {
    if (staticContext) {
      staticContext.status = 404;
    }
    return (
      <div>
        <Helmet>
          <title>Not found</title>
          <meta name="description" content="Страница 404" />
          <link rel="shortcut icon" href="https://cdn4.iconfinder.com/data/icons/essentials-set-3/100/error_404-512.png" />
          <meta name="keywords" content="Онлайн-магазин Online Store" />
        </Helmet>
        <img src="https://cdn4.iconfinder.com/data/icons/essentials-set-3/100/error_404-512.png" width="60px" />
        <br />
        404: Not found
      </div>
    );
  }
};
