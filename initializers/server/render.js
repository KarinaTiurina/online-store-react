import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import App from 'App';

import createStore from 'store';
import historyCb from 'helpers/historyCb';

const store = createStore();

export default (req, res) => {
  return historyCb(store, {pathname: req.url, query: req.query})
    .then(() => {
      const context = {};
      return {
        content: renderToString(<App store={store} location={req.url} context={context} />),
        initialState: store.getState(),
        helmet: Helmet.renderStatic()
      };
    });
};
